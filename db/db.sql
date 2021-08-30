CREATE TABLE IF NOT EXISTS class (
  id BIGSERIAL,
  grade INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  school VARCHAR(45) NOT NULL,
  version INT DEFAULT 1,
  PRIMARY KEY (id));

 
CREATE TABLE IF NOT EXISTS account (
  id BIGSERIAL,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  created TIMESTAMP(2) NOT NULL,
  updated TIMESTAMP(2) NOT NULL,
  deleted TIMESTAMP(2),
  PRIMARY KEY (id));

 
CREATE TABLE IF NOT EXISTS student (
  id BIGINT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  quote VARCHAR(250),
  chose_portrait BOOLEAN DEFAULT FALSE,
  class_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_student_class1
    FOREIGN KEY (class_id)
    REFERENCES class (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_student_account1
    FOREIGN KEY (id)
    REFERENCES account (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS photographer (
  id BIGINT,
  PRIMARY KEY (id),
  CONSTRAINT fk_photographer_account1
    FOREIGN KEY (id)
    REFERENCES account (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS yearbook_type (
  id BIGSERIAL,
  name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  portrait_meetings_count INT NOT NULL,
  group_meetings_count INT NOT NULL,
  photographer_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_yearbook_type_photographer1
    FOREIGN KEY (photographer_id)
    REFERENCES photographer (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS yearbook (
  id BIGINT,
  created TIMESTAMP(2) NOT NULL,
  updated TIMESTAMP(2) NOT NULL,
  deleted TIMESTAMP(2),
  prepayed TIMESTAMP(2),
  payed TIMESTAMP(2),
  next_meeting TIMESTAMP(2),
  deadline TIMESTAMP(2) NOT NULL,
  version INT DEFAULT 1,
  yearbook_type_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_yearbook_yearbook_type1
    FOREIGN KEY (yearbook_type_id)
    REFERENCES yearbook_type (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_yearbook_class1
    FOREIGN KEY (id)
    REFERENCES class (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS supervisor (
  id BIGINT,
  name VARCHAR(45) NOT NULL,
  contact VARCHAR(45) NOT NULL,
  is_viber BOOLEAN DEFAULT FALSE,
  is_telegram BOOLEAN DEFAULT FALSE,
  yearbook_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_supervisor_account1
    FOREIGN KEY (id)
    REFERENCES account (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_supervisor_yearbook1
    FOREIGN KEY (yearbook_id)
    REFERENCES yearbook (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

 
CREATE TABLE IF NOT EXISTS portrait (
  id BIGSERIAL,
  student_id BIGINT,
  yearbook_id BIGINT NOT NULL,
  url VARCHAR(200) NOT NULL,
  file_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_portrait_student1
    FOREIGN KEY (student_id)
    REFERENCES student (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_portrait_yearbook1
    FOREIGN KEY (yearbook_id)
    REFERENCES yearbook (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE);