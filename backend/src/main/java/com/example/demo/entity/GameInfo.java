package com.example.demo.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class GameInfo {
	@Id
    private int giNum;

    private String giPlatform;

    private String giTitle;

    private String giThumb;

    private Integer giPrice;

    private Integer giFprice;

    private Integer giRate;

    private String giLink;

    private String giState;

    private Timestamp giDate;

    private Integer steamAppid;

    private int gNum;
}
