alter table users
add hasStore boolean not null default false,
add userStoreId INT not null default 0,
add constraint fk_users_userStoreId
foreign key (userStoreId) references users_stores(id);