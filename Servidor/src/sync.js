import sequelize from './database.js';
import User from './models/users_model.js';

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database & tables:', err);
    });