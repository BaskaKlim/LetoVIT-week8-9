package com.accenture.letovit.todolist;

import java.io.Serializable;

public class ToDoItem implements Serializable{
//	pridam si String deadlineTime
	private String id;
//	premenim si boolean finished na String progressState
	private String title; private String text; private String progressState; private String createdAt; private String deadlineTime;

	
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


	public String getProgressState() {
		return progressState;
	}

	public void setProgressState(String progressState) {
		this.progressState = progressState;
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
		return "ToDoItem [title=" + title + ", text=" + text + ", progressState=" + text + ", createdAt=" + createdAt + ", deadlineTime=" + deadlineTime 
				+ "]";
	}
	
	
	

}
