package jpabook.jpashop.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Delivery {

    @Id @GeneratedValue
    @Column(name ="delivery_id")
    private Long id;

    @OneToOne(mappedBy = "delivery", fetch = LAZY)
    private Order order;

    @Embedded
    private Address address;

    // Enum은 이 어노테이션을 해줘야 하고 EnumType은 ordinary로 하면 저절로 숫자로 되므로 String으로 해주어야 한다.
    @Enumerated(EnumType.STRING)
    private DeliveryStatus status; // READY , COMP
}
