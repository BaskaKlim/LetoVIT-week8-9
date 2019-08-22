package com.accenture.letovit.todolist.database;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class DbToDoItem {
// ide patri k idenfitier musia byt spolu pod sebou
	
	@Id
	private String identifier;
	private String title;
	private String text;
	private boolean finished;
	private String createdAt;
//	tu som si definovala moj deadlineTime
	private String deadlineTime;
	
	// getters & setters si davam vygenerovat 
	public String getIdentifier() {
		return identifier;
	}
	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isFinished() {
		return finished;
	}
	public void setFinished(boolean finished) {
		this.finished = finished;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
//	definovany getter a setter pre deadlinetime
	public String getDeadlineTime() {
		return deadlineTime;
	}
	public void setDeadlineTime(String deadlineTime) {
		this.deadlineTime = deadlineTime;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

}