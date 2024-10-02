### ERD code

This is the code used for the current version of the ERD in [dbdiagram.io](https://dbdiagram.io/)

```
Table following_list {
  following_id string [primary key]
  user_id string [primary key]
}

Table users {
  auth0_id varchar [primary key]
  email varchar
  nickname varchar [unique]
  first_name varchar [not null]
  last_name varchar [not null]
  public boolean
}

Table songs {
  id integer [primary key]
  user_id string [not null]
  title varchar [not null]
  artist varchar [not null]
  genre varchar
  link varchar
  description varchar
  is_banned boolean [default: false]
}

Table notifications {
  id integer [primary key]
  receiver_id string
  sender_id string
  message string
  is_read boolean [default: false]
  timestamp timestamp
}

Table reports {
  id integer [primary key]
  created_on timestamp
  reported_by varchar
  reason_id integer
  is_processed boolean [default: false]
  song_id integer
  moderator_id integer
}

Table reasons {
  id integer [primary key]
  reason string
}

Ref: reports.reported_by > users.auth0_id
Ref: reports.moderator_id > users.auth0_id
Ref: reports.reason_id > reasons.id
Ref: reports.song_id > songs.id
Ref: following_list.user_id > users.auth0_id
Ref: following_list.following_id > users.auth0_id
Ref: notifications. receiver_id > users.auth0_id
Ref: notifications.sender_id > users.auth0_id
Ref: songs.user_id > users.auth0_id
```
