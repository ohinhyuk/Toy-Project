package jpabook.jpashop;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jpabook.jpashop.domain.Member;
import org.springframework.stereotype.Repository;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager em;

//    save에 ID 만 반환 하는 이유
//    커맨드와 쿼리를 분리하라는 원칙에 의해 최대한 리턴하지 않음. 다만 id 정도있으면 나중에 조회 할 수 있음.

    public Long save(Member member){
        em.persist(member);
        return member.getId();
    }

    public Member find(Long id){
        return em.find(Member.class , id);
    }

}
