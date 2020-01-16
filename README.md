# Easy Rent

Web application for accommodation renting made with React and Laravel.

## Project Setup

1.  Clone the project:

```
git clone git@github.com:nonkovicluka/easy-rent.git
```

2.  Navigate to backend folder and edit .env file adding your database username and password:

```
cd easy-rent/backend
```

3.  Populate database tables:

```
php artisan migrate:refresh --seed
```

4.  Start server:

```
php artisan serve
```

5.  Navigate to frontend folder:

```
cd easy-rent/frontend
```

6.  Install packages:

```
npm install
```

7.  Start the project:

```
npm start
```

## Features

* Three type of users roles (registration available for **_Manager_** and **_User_**)  
&nbsp;&nbsp;&nbsp;**Admin** (username: **_user1@user.com_**, password: **_pass_**)  
&nbsp;&nbsp;&nbsp;**Manager** (username: **_user2@user.com_**, password: **_pass_**)  
&nbsp;&nbsp;&nbsp;**User** (username: **_user3@user.com_**, password: **_pass_**)  

##### Unregistered user

An unregistered user can browse accommodation, search it, view rooms, register etc., but does not have access to other features.

##### User Features

Users can reserve rooms, and rate certain agency only after their first finished reservation.

##### Manager Features
Managers can create accommodations and rooms, but it won't be public untill admin approves it. Manager can also view all his accommodation in sortable table where he can manage it.

##### Admin Features
Admin has all features as previous users, but also receives a web-socket message as a notification when accommodation is registered. 
On 'Manage' page, admin can ban users and approve accommodation.