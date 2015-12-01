CREATE USER my_user
  WITH PASSWORD 'new_password'
  CREATEDB;
CREATE DATABASE typescript_blog_example
  OWNER my_user; 
