-- CREATE DATABASE
CREATE DATABASE cooperfilme
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- CREATE TABLE USERS
CREATE TABLE IF NOT EXISTS public.users
(
    id uuid NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    role smallint,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email),
    CONSTRAINT users_role_check CHECK (role >= 0 AND role <= 2)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

-- CREATE TABLE CLIENTS
CREATE TABLE IF NOT EXISTS public.clients
(
    id uuid NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT clients_pkey PRIMARY KEY (id),
    CONSTRAINT uksrv16ica2c1csub334bxjjb59 UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clients
    OWNER to postgres;

-- CREATE TABLE SCREEN PLAYS
CREATE TABLE IF NOT EXISTS public.screen_plays
(
    id uuid NOT NULL,
    content text COLLATE pg_catalog."default",
    created_on timestamp(6) with time zone,
    last_updated_on timestamp(6) with time zone,
    title character varying(255) COLLATE pg_catalog."default",
    client_id uuid NOT NULL,
    CONSTRAINT screen_plays_pkey PRIMARY KEY (id),
    CONSTRAINT fk760djl4gdjqcpgfx91j9em2e1 FOREIGN KEY (client_id)
        REFERENCES public.clients (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.screen_plays
    OWNER to postgres;

-- CREATE TABLE TRAILS
CREATE TABLE IF NOT EXISTS public.trails
(
    id uuid NOT NULL,
    created_on timestamp(6) with time zone,
    fit boolean,
    justification text COLLATE pg_catalog."default",
    last_updated_on timestamp(6) with time zone,
    rating integer NOT NULL,
    status character varying(255) COLLATE pg_catalog."default",
    screen_play_id uuid NOT NULL,
    user_id uuid,
    CONSTRAINT trails_pkey PRIMARY KEY (id),
    CONSTRAINT fk63naatfju3xxix97h6kg4ht32 FOREIGN KEY (screen_play_id)
        REFERENCES public.screen_plays (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkdah3sbc0a8yrbsq8kryk7dij9 FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT trails_status_check CHECK (status::text = ANY (ARRAY['AWAITING_ANALYSIS'::character varying, 'UNDER_ANALYSIS'::character varying, 'AWAITING_REVIEW'::character varying, 'UNDER_REVIEW'::character varying, 'AWAITING_APPROVAL'::character varying, 'UNDER_APPROVAL'::character varying, 'APPROVED'::character varying, 'REJECTED'::character varying]::text[]))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.trails
    OWNER to postgres;

-- INSERT USERS
INSERT INTO
  public.users( id, email, name, password, role )
VALUES
  ( '08da9d3f-d090-40ea-ba91-8faa0799d04d', 'jhon@email.com', 'Jhon', '$2a$10$p10x.pxuzSCPo1li./d.yezHIKZ5uY9WOFFw55jw9pDQ3TDagPmhq', 0 ),
  ( '4f627a5c-66a4-474d-8fae-a0e3b2558a96', 'mary@email.com', 'Mary', '$2a$10$lse9OlIL4LxOwuYQ4Usc0.wGuFeGW4mBj0WqnheQQrDtGMOK8ETtO', 1 ),
  ( '543ee191-3393-4f18-a96a-d60a6c3039cc', 'cloe@email.com', 'Cloe', '$2a$10$DwdO4UeUAUVjwuy93FPHIuA402u6zXguMNwNE.qamlLsJ3qDj3Zde', 2 ),
  ( 'ce804c42-ba15-4a5b-a91f-67d90c2ed499', 'luke@email.com', 'Luke', '$2a$10$W8OT8zMIVrmQTEL5rIe20.I3zzwt.E2vNtDkxCivUFjcpsXeiVtwq', 2 ),
  ( 'e4f1387b-94c8-464d-b93c-36a0c320458f', 'ana@email.com', 'Ana', '$2a$10$678K0JngLLNhg31lm.5Sf.1T2psK4nSbMNe1NYQhWVAJOozydeg8S', 2 );
