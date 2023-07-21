package jpabook.jpashop.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jpabook.jpashop.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    // 이 어노테이션을 두면 entitymanager를 스프링이 만들어서 Dependency injection을 한다.
//    @PersistenceContext
//    private EntityManager em;
//      public MemberRepository(EntityManager em){
//          this.em = em;
//      }
    // 위 의 코드를 @RequiredArgsConstructor를 사용하여 아래와 같이 나타낼 수 있다.
    private final EntityManager em;

    public void save(Member member){
        em.persist(member);
    }

    // 두번 째 파라미터로 pk를 전달
    public Member findOne(Long id){
        return em.find(Member.class , id);
    }

    // JPQL - 엔티티 객체를 대상으로 쿼리를 하는 차이가 있다.
    public List<Member> findAll(){
        return em.createQuery("select m from Member m" , Member.class).getResultList();
    }

    public List<Member> findByName(String name){
        return em.createQuery("select m from Member m where :name = m.name", Member.class)
                .setParameter("name" , name)
                .getResultList();
    }

}
