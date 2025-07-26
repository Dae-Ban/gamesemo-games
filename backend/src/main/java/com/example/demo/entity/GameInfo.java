package com.example.demo.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "game_info", schema = "gamesemo")
@Getter
@Setter
public class GameInfo {
	@Id
	@Column(name = "gi_num")
	private int giNum;

	@Column(name = "g_num")
	private int gNum;

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

}
