import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";

dotenv.config();

const mongodbURI = process.env.MONGODBURI;

const sampleBooks = [
    {
        "id": 1,
        "name": "Fiction",
        "title": "A mysterious journey unfolds, revealing secrets, magic, betrayal, and destiny.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 2,
        "name": "Comedy Book",
        "title": "A hilarious adventure filled with chaos, laughter, absurdity, wit, and surprises!",
        "price": 20,
        "category": "Entainment",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 3,
        "name": "Story",
        "title": "A lighthearted tale of mischief, laughter, unexpected twists, and comedic chaos.",
        "price": 30,
        "category": "Entainment",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 4,
        "name": "Magic Book",
        "title": "A mysterious journey unfolds, revealing secrets, magic, betrayal, and destiny.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 5,
        "name": "Yoga",
        "title": "A peaceful journey of mindfulness, balance, strength, flexibility, and inner harmony.",
        "price": 100,
        "category": "Physical Exercise",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 6,
        "name": "Sports",
        "title": "An exhilarating journey of teamwork, competition, perseverance, skill, and ultimate victory.",
        "price": 0,
        "category": "Physical Exercise",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 7,
        "name": "Medical",
        "title": "An exhilarating journey of teamwork, competition, perseverance, skill, and ultimate victory.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 8,
        "name": "Rituals",
        "title": "A mysterious journey unfolds, revealing secrets, magic, betrayal, and destiny.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 9,
        "name": "Music",
        "title": "A mysterious journey unfolds, revealing secrets, magic, betrayal, and destiny.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    },
    {
        "id": 10,
        "name": "Drama",
        "title": "A mysterious journey unfolds, revealing secrets, magic, betrayal, and destiny.",
        "price": 0,
        "category": "free",
        "image": "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?t=st=1743431298~exp=1743434898~hmac=d1bf5b3b27682515b7d0c63843ce4949df58de8509535a0c354b81fe19740e20&w=1380"
    }
];

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongodbURI);
        console.log("Connected to MongoDB");

        // Clear existing books
        await Book.deleteMany({});
        console.log("Cleared existing books");

        // Insert sample books
        await Book.insertMany(sampleBooks);
        console.log("Sample books inserted successfully");

        // Close connection
        await mongoose.connection.close();
        console.log("Database seeded and connection closed");
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();
