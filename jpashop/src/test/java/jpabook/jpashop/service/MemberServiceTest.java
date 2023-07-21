package jpabook.jpashop.service;

import jakarta.persistence.EntityManager;
import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;



@RunWith(SpringRunner.class)
@SpringBootTest // Runwith , SpringBootTest 두개의 어노테이션이 실제 spring을 올라가게 하고 디비에 데이터를 넣도록 하게 해줌
@Transactional // 이게 있어야 롤백이 됨.
public class MemberServiceTest {

    @Autowired MemberService memberService;         // 참조할 다른 게 없기에 어노테이션 주입
    @Autowired MemberRepository memberRepository;   // 참조할 다른 게 없기에

    @Autowired EntityManager em;

//    @Rollback(false) //  기본적으로 em.persist는 담아두었다가 commit할때 flush 되면서 insert 쿼리가 날라가는데 transactional 어노테이션으로 인해 자동 롤백이 된다. 그래서 insert문을 보고 싶다면 이걸 써줘야 한다.
    //이것 보다 좋은 방법이 em.persist 날라간 이후에 em.flush 해주면 된다. 그러면 insert문도 날라가고 rollback도 진행되어 디비에 반영도 안되기 때문
    @Test
    public void 회원가입() throws Exception {
        //given
        Member member = new Member();
        member.setName("Kim");

        //when
        Long savedId = memberService.join(member);

        //then
        em.flush();
        assertEquals(member, memberRepository.findOne(savedId));
    }


    @Test(expected = IllegalStateException.class)
    public void 중복_회원_예외() throws Exception {
        //given
        Member member1 = new Member();
        member1.setName("kim1");

        Member member2 = new Member();
        member2.setName("kim1");

        //when
        memberService.join(member1);
        memberService.join(member1);
//        try{
//            memberService.join(member1);
//        } catch(IllegalStateException e){
//            return;
//        }

        //then
        fail("예외가 발생해야 한다.");
    }

}