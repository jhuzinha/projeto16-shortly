--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u92v3qf98t54gf
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u92v3qf98t54gf;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: ozkfpsysinuaha
--

CREATE TABLE public.links (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" character varying(7) NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "ownerId" integer NOT NULL
);


ALTER TABLE public.links OWNER TO ozkfpsysinuaha;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: ozkfpsysinuaha
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO ozkfpsysinuaha;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ozkfpsysinuaha
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: ozkfpsysinuaha
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO ozkfpsysinuaha;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ozkfpsysinuaha
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ozkfpsysinuaha;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ozkfpsysinuaha
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: ozkfpsysinuaha
--

COPY public.links (id, url, "shortUrl", "visitCount", "createdAt", "ownerId") FROM stdin;
16	https://sasdasdeila.com	lDUADPV	0	2022-08-07 22:33:50.533761	43
17	https://aaaaaaa.com\n	asdasfs	0	2022-08-07 22:33:44.761869	45
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ozkfpsysinuaha
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
42	jhuzinha	jhuzinha@gmaill.com	$2b$10$v4KB7Vrb5cCCT.jfR3YzQOYPE1J6DRfULO0adJ2umidO2sd7Q91Q.	2022-08-05 23:36:10.759808
43	jhuzinha	jhuzinha1@gmail.com	$2b$10$lQPu4xx98Xw62acxznZty.baSPJKEPxAgKRUTZzoK00VRECyBsM6e	2022-08-06 00:11:16.88339
45	jhuzinha	jhuzinhsdssa@gmail.com	$2b$10$V82wjpSIMvFVzPgZiI7z6eEoim6bkzFBU5NqDSRRmVe9Lxx61mD4G	2022-08-06 00:53:30.718078
46	jhuzinha	jhuzinha@gmail.com	$2b$10$V2CmE4g8YXL6ZWRhJWTRxOVZqBhuIRoGKWXehbYzK3Wcska8euIaS	2022-08-06 00:53:37.423793
47	jhuzinha	jhuzinhaaaaaaaaaa@gmail.com	$2b$10$iazYpZQ1rF5fdyA491r/2ewFrk09bZpxYH1EqklyyUHb2z0K2d2ua	2022-08-07 23:34:01.349767
48	jhuzinha	jhuzinhaaaaaaaaaasdadasda@gmail.com	$2b$10$XFp4U15Tdyz93VTUya9UWO3qmBkUlDe829CnTTxrCSPf0/AcKYYru	2022-08-07 23:34:21.809387
49	jhuzinha	jhuzaaaaaaaasdadasda@gmail.com	$2b$10$n65jScII8tVP0z37S56CzOArj8ztEqpJjI25yCUPL8BbfppIjUf46	2022-08-07 23:34:24.267961
50	jhuzinha	jhuzaaaaa@gmail.com	$2b$10$FlPU9ciM1Z7h/H3oqjmsBea6nOF3DY2tAhqK2lBwPxamm5KfVuFrK	2022-08-07 23:34:26.777349
51	jhuzinha	jhuzaaaaa@gil.com	$2b$10$cmuM//Ipp/a.lPg1HKhVV.2gIYh0UWt6bTyhAzCDU5WTZ7nCWS7S6	2022-08-07 23:34:28.466575
52	jhuzinha	jhuzaaaa@gil.com	$2b$10$mbwNdCZA3RXxmwtk107ysOwVjh.6bxZNWJfYhT2.2FpGVYaNi1LK2	2022-08-07 23:34:30.625192
53	jhuzinha	jhuza@gil.com	$2b$10$UwCmJc2oabWE41vMsHuXoeRlZrY1YPjGa5DnowWKvkQC0YhMw.OIW	2022-08-07 23:34:34.905298
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ozkfpsysinuaha
--

SELECT pg_catalog.setval('public.links_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ozkfpsysinuaha
--

SELECT pg_catalog.setval('public.users_id_seq', 53, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_ownerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ozkfpsysinuaha
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u92v3qf98t54gf
--

GRANT USAGE ON SCHEMA heroku_ext TO ozkfpsysinuaha;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ozkfpsysinuaha
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ozkfpsysinuaha;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO ozkfpsysinuaha;


--
-- PostgreSQL database dump complete
--

