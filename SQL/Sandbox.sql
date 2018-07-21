begin tran

create table links(
	Id int primary key identity,
	DisplayedName varchar(50),
	Url varchar(1000),
	CreateTimestamp DateTime,
	Visible bit,
	sort int
)

create table todo(
	Id int primary key identity,
	Title varchar(100),
	Description varchar(1000),
	IsCompleted bit,
	Sort int,
	CreateTimestamp datetime,
	EndTimestamp datetime,
	RequiredByDate datetime
)

select * from links;

insert into links
values('Google', 'https://www.google.com/', GetDate(), 1, 1)

select * from todo

insert into todo
values('Get Milk','We need Milk from the store',0,1,getdate(), null, null)


rollback
commit