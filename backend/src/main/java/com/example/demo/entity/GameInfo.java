package com.example.demo.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class GameInfo {
	@Id
    @Column(name = "gi_num") // 기본키로 사용할 수 있는 값
    private Long giNum;

    @Column(name = "gi_platform")
    private String giPlatform;

    @Column(name = "gi_title")
    private String giTitle;

    @Column(name = "gi_thumb")
    private String giThumb;

    @Column(name = "gi_price")
    private Integer giPrice;

    @Column(name = "gi_fprice")
    private Integer giFprice;

    @Column(name = "gi_rate")
    private Integer giRate;

    @Column(name = "gi_link")
    private String giLink;

    @Column(name = "gi_state")
    private String giState;

    @Column(name = "gi_date")
    private Timestamp giDate;

    @Column(name = "steam_appid")
    private Long steamAppid;

    @Column(name = "g_num")
    private Long gNum;
}
