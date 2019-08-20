package com.accenture.letovit.todolist.validator;

import com.accenture.letovit.todolist.ToDoItem;

public class ToDoValidator {
	public static void validate(ToDoItem toDoItem) {
		if (toDoItem.getTitle().length() > 10) {
			throw new RuntimeException("Dlhy titulok");
		}
		if (toDoItem.getText().length() > 150) {
			throw new RuntimeException("Chyba");
		}
		for (int i = 0; i < toDoItem.getTitle().length(); i++) {
			Character character = toDoItem.getTitle().charAt(i);
			if (!Character.isLetterOrDigit(character) &&  !Character.isSpaceChar(character)) {
				throw new RuntimeException("Znak nie je ani cislo ani pismeno!");
			}
		}
	}
}
