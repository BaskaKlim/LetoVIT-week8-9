package com.accenture.letovit.todolist;

import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.letovit.todolist.database.DbToDoItem;
import com.accenture.letovit.todolist.database.DbToDoItemRepository;
import com.accenture.letovit.todolist.database.ToDoItemConverter;
import com.accenture.letovit.todolist.validator.ToDoValidator;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class ToDoListController {

	private DbToDoItemRepository repository;

	public ToDoListController(DbToDoItemRepository dbToDoItemRepository) {
		this.repository = dbToDoItemRepository;
	}

	@RequestMapping(value = "todos", method = RequestMethod.POST)
	public String addToDoItem(@RequestBody ToDoItem request) {
		ToDoValidator.validate(request);
		// pretty date & time
		LocalDateTime now = LocalDateTime.now();
		String prettyDateTime = DateTimeFormatter.ISO_DATE_TIME.format(now);
		request.setCreatedAt(prettyDateTime);

		// generate identifier
		String name = UUID.randomUUID().toString();
		System.out.println("Aha co som dostal: " + request);

		
		// save to database tesne predtym ako vraciame odpoved ich chceme ulozit
		DbToDoItem dbToDoItem = ToDoItemConverter.jsonToDbEntity(request, name);
		repository.save(dbToDoItem);

		// TODO implement save functionality
		return name;
	}

	@RequestMapping(value = "todos", method = RequestMethod.GET)
	public List<ToDoItem> fetchAllToDoItems() {
		Iterable<DbToDoItem> dbToDoItemList = repository.findAll();
		List<ToDoItem> toDoItems = new ArrayList<ToDoItem>();
		
		for (DbToDoItem dbToDoItem : dbToDoItemList) { 
			ToDoItem toDoItem = ToDoItemConverter.dbEntityToJson(dbToDoItem);
			toDoItems.add(toDoItem);
		}
		
		return toDoItems;
	}

	@RequestMapping(value = "/todos/{identifier}", method = RequestMethod.DELETE)
	public void deleteToDoItem(@PathVariable String identifier) {
	repository.deleteById(identifier);
	}

	@RequestMapping(value = "/todos/{identifier}", method = RequestMethod.PATCH)
	public void updateToDoItem(@PathVariable String identifier, @RequestBody UpdateRequest requestBody) {
		
		DbToDoItem dbToDoItem = repository.findById(identifier).get();
		dbToDoItem.setFinished(requestBody.isFinished());
		repository.save(dbToDoItem);
	}

}