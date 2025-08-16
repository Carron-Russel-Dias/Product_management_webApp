package com.example.ProductManagementBackend.entity;


import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data

@Getter
@Setter
@Entity
@Table(name = "Product")
public class Product {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id ;

    private String name;

    private Double price;

    private int quantity;
}
