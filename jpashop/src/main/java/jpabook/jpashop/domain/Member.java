package jpabook.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name="member_id")
    private Long id;

    private String name;

    //    Embedded 나 Embedable하나만 있어도 되는데 둘다 써줌
    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member")  // Member 테이블의 member 필드로 인해 나는 매핑 되었고 주인이 아니다 라는뜻
    private List<Order> orders = new ArrayList<>();
}
