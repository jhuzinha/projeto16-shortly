CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL
);

CREATE TABLE "links" (
	"id" SERIAL PRIMARY KEY,
	"url" TEXT NOT NULL,
	"shortUrl" VARCHAR(7) NOT NULL,
    "linksCount" INTEGER DEFAULT 0,
    "visitCount" INTEGER DEFAULT 0,
    "ownerId" INTEGER NOT NULL REFERENCES "users"(id),
	"createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
);