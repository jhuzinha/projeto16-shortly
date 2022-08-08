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
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ozkfpsysinuaha
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ozkfpsysinuaha
--

SELECT pg_catalog.setval('public.links_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ozkfpsysinuaha
--

SELECT pg_catalog.setval('public.users_id_seq', 54, true);


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

