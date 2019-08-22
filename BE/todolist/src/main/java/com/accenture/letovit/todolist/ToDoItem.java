package com.accenture.letovit.todolist;

import java.io.Serializable;

public class ToDoItem implements Serializable{
//	pridam si String deadlineTime
	private String id;
	private String title; private String text; boolean finished; private String createdAt; private String deadlineTime;

	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

// pridanie deadlineTime getter a setter

	public String getDeadlineTime() {
		return deadlineTime;
	}
	
	public void setDeadlineTime(String deadlineTime) {
		this.deadlineTime = deadlineTime;
	}

	@Override
	public String toString() {
//		pridanie deadlineTime
		return "ToDoItem [title=" + title + ", text=" + text + ", finished=" + finished + ", createdAt=" + createdAt + ", deadlineTime=" + deadlineTime 
				+ "]";
	}
	
	
	

}
