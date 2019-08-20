package com.accenture.letovit.todolist.database;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DbToDoItemRepository extends CrudRepository<DbToDoItem, String>{

}
