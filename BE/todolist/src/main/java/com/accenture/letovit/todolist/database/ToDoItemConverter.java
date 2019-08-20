package com.accenture.letovit.todolist.database;

import com.accenture.letovit.todolist.ToDoItem;

public class ToDoItemConverter {

	public static DbToDoItem jsonToDbEntity(ToDoItem source, String identifier) {
		DbToDoItem target = new DbToDoItem();

		target.setCreatedAt(source.getCreatedAt());
		target.setFinished(source.isFinished());
		target.setText(source.getText());
		target.setTitle(source.getTitle());

		target.setIdentifier(identifier);

		return target;
	}

	public static ToDoItem dbEntityToJson(DbToDoItem source) {
		ToDoItem target = new ToDoItem();

		target.setCreatedAt(source.getCreatedAt());
		target.setFinished(source.isFinished());
		target.setText(source.getText());
		target.setTitle(source.getTitle());

		return target;

	}
}