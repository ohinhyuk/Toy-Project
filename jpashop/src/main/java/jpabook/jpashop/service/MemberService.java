package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// 반드시 트랜잭션 안에서 데이터 변경해야 한다. (spring 꺼 사용하느 걸 권장)
// 트랜잭션 조회만 일어나는 곳에서는 readOnly 를 주면 성능이 좋아진다.
// 만약 readOnly가 많다면 MemberService위에는 readOnly를 주고 쓰기에 @Transactional을 주는 것이 좋음
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {


    // 바뀔일이 없으면 final 하는 걸 추천
    private final MemberRepository memberRepository;

// RequiredArgsConstructor 어노테이션이 final이 붙어있는 필드만 보고 생성자를 자동으로 만들어줌
// 그래서 위 어노테이션에 final Repository하는 것을 추천
//    // 생성자가 하나이면 Autowired가 없어도 자동으로 인잭션 해줌.
//    @Autowired
//    public MemberService(MemberRepository memberRepository){
//        this.memberRepository = memberRepository;
//    }

    // 회원 가입
    @Transactional
    public Long join(Member member){

        validateDuplicateMember(member); // 중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {

        List<Member> findMembers = memberRepository.findByName(member.getName());
        if(!findMembers.isEmpty()){
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // 회원 전체 조회
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId){
        return memberRepository.findOne(memberId);
    }


}
