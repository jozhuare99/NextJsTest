create table users_stores (
  id INT NOT NULL auto_increment,
  user_id int not null,
  store_id int not null,
  store_name VARCHAR(255) not null,
  store_address varchar(255) not null,
  store_contact_number varchar(255) not null,
  created_at DATETIME not null default CURRENT_TIMESTAMP,
  updated_at DATETIME not null default CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  foreign key (user_id) references users (id)
);