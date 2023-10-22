--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-10-22 19:07:34 CEST

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 239 (class 1259 OID 16993)
-- Name: tbl_bitacora_adiestramiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_adiestramiento (
    id integer NOT NULL,
    categoria character varying(50) NOT NULL,
    puntuacion numeric(5,2) NOT NULL,
    juez character varying(200) NOT NULL,
    id_resultado integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_adiestramiento OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16992)
-- Name: tbl_bitacora_adiestramiento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_adiestramiento ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_adiestramiento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 241 (class 1259 OID 17034)
-- Name: tbl_bitacora_alimentacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_alimentacion (
    id integer NOT NULL,
    hora time without time zone NOT NULL,
    cantidad_alimento numeric(8,2),
    tipo_alimento character varying(1000),
    cantidad_pasto numeric(8,2),
    tipo_pasto character varying(1000),
    suplementos character varying(2000),
    fecha date NOT NULL,
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_alimentacion OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 17033)
-- Name: tbl_bitacora_alimentacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_alimentacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_alimentacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 225 (class 1259 OID 16704)
-- Name: tbl_bitacora_herraje; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_herraje (
    id integer NOT NULL,
    tipo_herraje character varying(500),
    fecha_herraje date NOT NULL,
    observaciones character varying(1000),
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_herraje OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16703)
-- Name: tbl_bitacora_herraje_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_herraje ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_herraje_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 243 (class 1259 OID 17045)
-- Name: tbl_bitacora_hidratacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_hidratacion (
    id integer NOT NULL,
    fecha date NOT NULL,
    litros_cubeta_1 numeric(4,2) NOT NULL,
    litros_cubeta_2 numeric(4,2) NOT NULL,
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_hidratacion OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 17044)
-- Name: tbl_bitacora_hidratacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_hidratacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_hidratacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 16687)
-- Name: tbl_bitacora_peso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_peso (
    id integer NOT NULL,
    peso numeric(8,2) NOT NULL,
    fecha_peso date NOT NULL,
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_peso OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16686)
-- Name: tbl_bitacora_peso_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_peso ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_peso_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 228 (class 1259 OID 16730)
-- Name: tbl_bitacora_pista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_pista (
    id integer NOT NULL,
    trabajo_en_pista integer NOT NULL,
    jinete character varying(200) NOT NULL,
    observaciones character varying(1000),
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_pista OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16742)
-- Name: tbl_bitacora_pista_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_pista ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_pista_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 235 (class 1259 OID 16966)
-- Name: tbl_bitacora_resultados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_resultados (
    id integer NOT NULL,
    sede character varying(200) NOT NULL,
    fecha_competencia date NOT NULL,
    tipo_competencia integer NOT NULL,
    observaciones character varying(1000),
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_resultados OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16965)
-- Name: tbl_bitacora_resultados_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_resultados ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_resultados_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 237 (class 1259 OID 16984)
-- Name: tbl_bitacora_salto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_salto (
    id integer NOT NULL,
    altura integer NOT NULL,
    modalidad integer NOT NULL,
    puntos_malos integer NOT NULL,
    tiempo real NOT NULL,
    lugar_obtenido integer NOT NULL,
    id_resultado integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_salto OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16983)
-- Name: tbl_bitacora_salto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_salto ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_salto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 16717)
-- Name: tbl_bitacora_vet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_bitacora_vet (
    id integer NOT NULL,
    fecha_visita_vet date NOT NULL,
    razon_visita_vet character varying(1000) NOT NULL,
    diagnostico character varying(1000) NOT NULL,
    tratamiento character varying(1000) NOT NULL,
    id_caballo integer NOT NULL
);


ALTER TABLE public.tbl_bitacora_vet OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16716)
-- Name: tbl_bitacora_vet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_bitacora_vet ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_bitacora_vet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 221 (class 1259 OID 16466)
-- Name: tbl_cat_activity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_activity (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    estatus boolean DEFAULT false NOT NULL
);


ALTER TABLE public.tbl_cat_activity OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16465)
-- Name: tbl_cat_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_activity ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 244 (class 1259 OID 17063)
-- Name: tbl_cat_alturas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_alturas (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    estatus boolean DEFAULT true NOT NULL
);


ALTER TABLE public.tbl_cat_alturas OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 17078)
-- Name: tbl_cat_alturas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_alturas ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_alturas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 230 (class 1259 OID 16743)
-- Name: tbl_cat_competencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_competencias (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    estatus boolean DEFAULT false NOT NULL
);


ALTER TABLE public.tbl_cat_competencias OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16749)
-- Name: tbl_cat_competencias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_competencias ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_competencias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16454)
-- Name: tbl_cat_gender; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_gender (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    estatus boolean DEFAULT false
);


ALTER TABLE public.tbl_cat_gender OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16453)
-- Name: tbl_cat_gender_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_gender ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_gender_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 245 (class 1259 OID 17068)
-- Name: tbl_cat_modalidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_modalidades (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    estatus boolean DEFAULT true NOT NULL
);


ALTER TABLE public.tbl_cat_modalidades OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 17100)
-- Name: tbl_cat_modalidades_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_modalidades ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_modalidades_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 232 (class 1259 OID 16906)
-- Name: tbl_cat_pista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_cat_pista (
    id integer NOT NULL,
    description character varying NOT NULL,
    estatus boolean NOT NULL
);


ALTER TABLE public.tbl_cat_pista OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16913)
-- Name: tbl_cat_pista_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_cat_pista ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_cat_pista_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 16448)
-- Name: tbl_horses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_horses (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    age integer NOT NULL,
    breed character varying(30) NOT NULL,
    gender integer DEFAULT 4 NOT NULL,
    register character varying(30),
    microchip character varying(30),
    activity integer DEFAULT 6,
    url character varying(500)
);


ALTER TABLE public.tbl_horses OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16447)
-- Name: tbl_horses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_horses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_horses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16400)
-- Name: tbl_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_users (
    id integer NOT NULL,
    email text NOT NULL,
    pass text NOT NULL
);


ALTER TABLE public.tbl_users OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16399)
-- Name: tbl_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tbl_users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tbl_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3740 (class 0 OID 16993)
-- Dependencies: 239
-- Data for Name: tbl_bitacora_adiestramiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_adiestramiento (id, categoria, puntuacion, juez, id_resultado) FROM stdin;
1	CAT	10.50	Pedro	5
2	asdf	100.00	Yo	7
\.


--
-- TOC entry 3742 (class 0 OID 17034)
-- Dependencies: 241
-- Data for Name: tbl_bitacora_alimentacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_alimentacion (id, hora, cantidad_alimento, tipo_alimento, cantidad_pasto, tipo_pasto, suplementos, fecha, id_caballo) FROM stdin;
1	14:47:00	10.50	Rico	0.00			2023-08-14	19
2	21:51:00	0.00		100.00	Delicioso	Tenemos Suplementos	2023-08-15	19
3	11:39:00	100.00	Puerco	10.00	pasto		2023-08-21	19
4	15:46:00	10.00	pastor	0.00		Suplementos	2023-08-21	19
5	15:07:00	100.00	Alimento1	200.00	Pasto1	Hay Suplementos	2023-08-21	19
6	18:10:00	500.00	Alimento2	0.00			2023-08-21	19
7	20:13:00	0.00		5.00	Pasto2		2023-08-21	19
8	19:28:00	10.50	A1	0.00			2023-08-21	19
9	12:43:00	1000.00	Alimento	0.00			2023-08-22	19
10	17:46:00	100.00	DogChow	10.00	Rico	No lleva suplementos\n	2023-08-25	19
11	21:51:00	3000.00		0.00		No	2023-08-25	19
\.


--
-- TOC entry 3726 (class 0 OID 16704)
-- Dependencies: 225
-- Data for Name: tbl_bitacora_herraje; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_herraje (id, tipo_herraje, fecha_herraje, observaciones, id_caballo) FROM stdin;
1	Sencillo	2023-08-07	Taasdf	19
2	Perron	2023-08-16	Ta chido	20
\.


--
-- TOC entry 3744 (class 0 OID 17045)
-- Dependencies: 243
-- Data for Name: tbl_bitacora_hidratacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_hidratacion (id, fecha, litros_cubeta_1, litros_cubeta_2, id_caballo) FROM stdin;
1	2023-08-15	15.50	10.00	19
\.


--
-- TOC entry 3724 (class 0 OID 16687)
-- Dependencies: 223
-- Data for Name: tbl_bitacora_peso; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_peso (id, peso, fecha_peso, id_caballo) FROM stdin;
2	1000.50	2023-08-14	19
3	1500.20	2023-08-16	20
4	10.20	2023-08-21	19
\.


--
-- TOC entry 3729 (class 0 OID 16730)
-- Dependencies: 228
-- Data for Name: tbl_bitacora_pista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_pista (id, trabajo_en_pista, jinete, observaciones, id_caballo) FROM stdin;
1	1	Jinete1		19
2	2	Jinete2		19
3	3	Jinete3		19
4	3	Javo	Ninguna	20
5	3	Yo		20
\.


--
-- TOC entry 3736 (class 0 OID 16966)
-- Dependencies: 235
-- Data for Name: tbl_bitacora_resultados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_resultados (id, sede, fecha_competencia, tipo_competencia, observaciones, id_caballo) FROM stdin;
4	CDMX	2023-08-11	1	sALTO	19
5	CDMX	2023-08-11	2	```'''''´´´´´	19
6	Cuernavaca	2023-08-15	1	Sin observaciones	19
7	ABC	2023-08-22	2		19
8	Chicago	2023-08-25	1	No tiene observaciones.	19
9	CDMX	2023-10-22	1	Una	19
\.


--
-- TOC entry 3738 (class 0 OID 16984)
-- Dependencies: 237
-- Data for Name: tbl_bitacora_salto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_salto (id, altura, modalidad, puntos_malos, tiempo, lugar_obtenido, id_resultado) FROM stdin;
1	1	1	100	100.5	14	4
2	2	2	10	100	20	6
3	3	3	5	100.45	3	8
4	20	7	1	10.5	1	9
\.


--
-- TOC entry 3728 (class 0 OID 16717)
-- Dependencies: 227
-- Data for Name: tbl_bitacora_vet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_bitacora_vet (id, fecha_visita_vet, razon_visita_vet, diagnostico, tratamiento, id_caballo) FROM stdin;
1	2023-08-07	Falta de apetito	Cólico	Lavado de estómago	19
2	2023-08-07	asldñkfj	adsf	asdf	19
\.


--
-- TOC entry 3722 (class 0 OID 16466)
-- Dependencies: 221
-- Data for Name: tbl_cat_activity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_activity (id, description, estatus) FROM stdin;
6		f
2	Adiestramiento	t
3	Salto y Adiestramiento	t
4	Paseo	t
5	Desarrollo	t
1	Salto	t
\.


--
-- TOC entry 3745 (class 0 OID 17063)
-- Dependencies: 244
-- Data for Name: tbl_cat_alturas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_alturas (id, description, estatus) FROM stdin;
1	0.40	t
2	0.60	t
3	0.70	t
4	0.80	t
5	0.90	t
6	1.00	t
7	1.10	t
8	1.15	t
9	1.20	t
10	1.25	t
11	1.30	t
12	1.35	t
13	1.40	t
14	Clásico	t
15	Gran Premio	t
16	5 años	t
17	6 años	t
18	7 años	t
19	8 años	t
20	Barras	t
\.


--
-- TOC entry 3731 (class 0 OID 16743)
-- Dependencies: 230
-- Data for Name: tbl_cat_competencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_competencias (id, description, estatus) FROM stdin;
1	Salto	t
2	Adiestramiento	t
\.


--
-- TOC entry 3720 (class 0 OID 16454)
-- Dependencies: 219
-- Data for Name: tbl_cat_gender; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_gender (id, description, estatus) FROM stdin;
4		f
1	Macho Entero	t
2	Macho Castrado	t
3	Yegua	t
\.


--
-- TOC entry 3746 (class 0 OID 17068)
-- Dependencies: 245
-- Data for Name: tbl_cat_modalidades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_modalidades (id, description, estatus) FROM stdin;
1	Desempate Sucesivo	t
2	Desempate Posterior	t
3	Velocidad	t
4	Tiempo Ideal	t
5	Dos Fases	t
6	Winning Round	t
7	Otros	t
\.


--
-- TOC entry 3733 (class 0 OID 16906)
-- Dependencies: 232
-- Data for Name: tbl_cat_pista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_cat_pista (id, description, estatus) FROM stdin;
1	Ligero	t
2	Intenso	t
3	Pesado	t
\.


--
-- TOC entry 3718 (class 0 OID 16448)
-- Dependencies: 217
-- Data for Name: tbl_horses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_horses (id, name, age, breed, gender, register, microchip, activity, url) FROM stdin;
19	Patricio	15	Pura Sangre	2	11203948123094	10239847	1	http://localhost:4200/forms/19/Patricio
20	Javo	15	Pura Sangre	3	298374	03947987	3	http://localhost:4200/forms/20/Javo
\.


--
-- TOC entry 3716 (class 0 OID 16400)
-- Dependencies: 215
-- Data for Name: tbl_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_users (id, email, pass) FROM stdin;
3	e.p.y.f@hotmail.com	ABCD1234..$
\.


--
-- TOC entry 3772 (class 0 OID 0)
-- Dependencies: 238
-- Name: tbl_bitacora_adiestramiento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_adiestramiento_id_seq', 2, true);


--
-- TOC entry 3773 (class 0 OID 0)
-- Dependencies: 240
-- Name: tbl_bitacora_alimentacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_alimentacion_id_seq', 11, true);


--
-- TOC entry 3774 (class 0 OID 0)
-- Dependencies: 224
-- Name: tbl_bitacora_herraje_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_herraje_id_seq', 2, true);


--
-- TOC entry 3775 (class 0 OID 0)
-- Dependencies: 242
-- Name: tbl_bitacora_hidratacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_hidratacion_id_seq', 1, true);


--
-- TOC entry 3776 (class 0 OID 0)
-- Dependencies: 222
-- Name: tbl_bitacora_peso_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_peso_id_seq', 4, true);


--
-- TOC entry 3777 (class 0 OID 0)
-- Dependencies: 229
-- Name: tbl_bitacora_pista_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_pista_id_seq', 5, true);


--
-- TOC entry 3778 (class 0 OID 0)
-- Dependencies: 234
-- Name: tbl_bitacora_resultados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_resultados_id_seq', 9, true);


--
-- TOC entry 3779 (class 0 OID 0)
-- Dependencies: 236
-- Name: tbl_bitacora_salto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_salto_id_seq', 4, true);


--
-- TOC entry 3780 (class 0 OID 0)
-- Dependencies: 226
-- Name: tbl_bitacora_vet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_bitacora_vet_id_seq', 2, true);


--
-- TOC entry 3781 (class 0 OID 0)
-- Dependencies: 220
-- Name: tbl_cat_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_activity_id_seq', 6, true);


--
-- TOC entry 3782 (class 0 OID 0)
-- Dependencies: 246
-- Name: tbl_cat_alturas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_alturas_id_seq', 20, true);


--
-- TOC entry 3783 (class 0 OID 0)
-- Dependencies: 231
-- Name: tbl_cat_competencias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_competencias_id_seq', 2, true);


--
-- TOC entry 3784 (class 0 OID 0)
-- Dependencies: 218
-- Name: tbl_cat_gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_gender_id_seq', 4, true);


--
-- TOC entry 3785 (class 0 OID 0)
-- Dependencies: 247
-- Name: tbl_cat_modalidades_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_modalidades_id_seq', 7, true);


--
-- TOC entry 3786 (class 0 OID 0)
-- Dependencies: 233
-- Name: tbl_cat_pista_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_cat_pista_id_seq', 3, true);


--
-- TOC entry 3787 (class 0 OID 0)
-- Dependencies: 216
-- Name: tbl_horses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_horses_id_seq', 20, true);


--
-- TOC entry 3788 (class 0 OID 0)
-- Dependencies: 214
-- Name: tbl_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_users_id_seq', 3, true);


--
-- TOC entry 3554 (class 2606 OID 16997)
-- Name: tbl_bitacora_adiestramiento tbl_bitacora_adiestramiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_adiestramiento
    ADD CONSTRAINT tbl_bitacora_adiestramiento_pkey PRIMARY KEY (id);


--
-- TOC entry 3540 (class 2606 OID 16710)
-- Name: tbl_bitacora_herraje tbl_bitacora_herraje_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_herraje
    ADD CONSTRAINT tbl_bitacora_herraje_pkey PRIMARY KEY (id);


--
-- TOC entry 3556 (class 2606 OID 17049)
-- Name: tbl_bitacora_hidratacion tbl_bitacora_hidratacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_hidratacion
    ADD CONSTRAINT tbl_bitacora_hidratacion_pkey PRIMARY KEY (id);


--
-- TOC entry 3538 (class 2606 OID 16691)
-- Name: tbl_bitacora_peso tbl_bitacora_peso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_peso
    ADD CONSTRAINT tbl_bitacora_peso_pkey PRIMARY KEY (id);


--
-- TOC entry 3544 (class 2606 OID 16736)
-- Name: tbl_bitacora_pista tbl_bitacora_pista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_pista
    ADD CONSTRAINT tbl_bitacora_pista_pkey PRIMARY KEY (id);


--
-- TOC entry 3552 (class 2606 OID 17004)
-- Name: tbl_bitacora_salto tbl_bitacora_salto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_salto
    ADD CONSTRAINT tbl_bitacora_salto_pkey PRIMARY KEY (id);


--
-- TOC entry 3542 (class 2606 OID 16723)
-- Name: tbl_bitacora_vet tbl_bitacora_vet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_vet
    ADD CONSTRAINT tbl_bitacora_vet_pkey PRIMARY KEY (id);


--
-- TOC entry 3536 (class 2606 OID 16470)
-- Name: tbl_cat_activity tbl_cat_activity_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_activity
    ADD CONSTRAINT tbl_cat_activity_pkey PRIMARY KEY (id);


--
-- TOC entry 3558 (class 2606 OID 17067)
-- Name: tbl_cat_alturas tbl_cat_alturas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_alturas
    ADD CONSTRAINT tbl_cat_alturas_pkey PRIMARY KEY (id);


--
-- TOC entry 3546 (class 2606 OID 16748)
-- Name: tbl_cat_competencias tbl_cat_competencias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_competencias
    ADD CONSTRAINT tbl_cat_competencias_pkey PRIMARY KEY (id);


--
-- TOC entry 3534 (class 2606 OID 16458)
-- Name: tbl_cat_gender tbl_cat_gender_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_gender
    ADD CONSTRAINT tbl_cat_gender_pkey PRIMARY KEY (id);


--
-- TOC entry 3560 (class 2606 OID 17073)
-- Name: tbl_cat_modalidades tbl_cat_modalidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_modalidades
    ADD CONSTRAINT tbl_cat_modalidades_pkey PRIMARY KEY (id);


--
-- TOC entry 3548 (class 2606 OID 16912)
-- Name: tbl_cat_pista tbl_cat_pista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_cat_pista
    ADD CONSTRAINT tbl_cat_pista_pkey PRIMARY KEY (id);


--
-- TOC entry 3530 (class 2606 OID 16452)
-- Name: tbl_horses tbl_horses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_horses
    ADD CONSTRAINT tbl_horses_pkey PRIMARY KEY (id);


--
-- TOC entry 3528 (class 2606 OID 16404)
-- Name: tbl_users tbl_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_users
    ADD CONSTRAINT tbl_users_pkey PRIMARY KEY (id);


--
-- TOC entry 3532 (class 2606 OID 16495)
-- Name: tbl_horses tblhorses_name_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_horses
    ADD CONSTRAINT tblhorses_name_unique UNIQUE (name);


--
-- TOC entry 3550 (class 2606 OID 16972)
-- Name: tbl_bitacora_resultados tblpkid; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_resultados
    ADD CONSTRAINT tblpkid PRIMARY KEY (id);


--
-- TOC entry 3563 (class 2606 OID 16692)
-- Name: tbl_bitacora_peso peso_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_peso
    ADD CONSTRAINT peso_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3572 (class 2606 OID 17050)
-- Name: tbl_bitacora_hidratacion tbl_bithidr_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_hidratacion
    ADD CONSTRAINT tbl_bithidr_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3570 (class 2606 OID 16998)
-- Name: tbl_bitacora_adiestramiento tblbitadies_idresultado_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_adiestramiento
    ADD CONSTRAINT tblbitadies_idresultado_id FOREIGN KEY (id_resultado) REFERENCES public.tbl_bitacora_resultados(id);


--
-- TOC entry 3571 (class 2606 OID 17039)
-- Name: tbl_bitacora_alimentacion tblbitalim_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_alimentacion
    ADD CONSTRAINT tblbitalim_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3564 (class 2606 OID 16711)
-- Name: tbl_bitacora_herraje tblbitherraje_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_herraje
    ADD CONSTRAINT tblbitherraje_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3566 (class 2606 OID 16737)
-- Name: tbl_bitacora_pista tblbitpista_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_pista
    ADD CONSTRAINT tblbitpista_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3567 (class 2606 OID 16973)
-- Name: tbl_bitacora_resultados tblbitres_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_resultados
    ADD CONSTRAINT tblbitres_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3568 (class 2606 OID 16978)
-- Name: tbl_bitacora_resultados tblbitres_tipoCompetencia_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_resultados
    ADD CONSTRAINT "tblbitres_tipoCompetencia_id" FOREIGN KEY (tipo_competencia) REFERENCES public.tbl_cat_competencias(id) NOT VALID;


--
-- TOC entry 3569 (class 2606 OID 16987)
-- Name: tbl_bitacora_salto tblbitsalto_idresultado_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_salto
    ADD CONSTRAINT tblbitsalto_idresultado_id FOREIGN KEY (id_resultado) REFERENCES public.tbl_bitacora_resultados(id);


--
-- TOC entry 3565 (class 2606 OID 16724)
-- Name: tbl_bitacora_vet tblbitvet_idcaballo_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_bitacora_vet
    ADD CONSTRAINT tblbitvet_idcaballo_id FOREIGN KEY (id_caballo) REFERENCES public.tbl_horses(id);


--
-- TOC entry 3561 (class 2606 OID 16471)
-- Name: tbl_horses tblcatactivity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_horses
    ADD CONSTRAINT tblcatactivity_id_fkey FOREIGN KEY (activity) REFERENCES public.tbl_cat_activity(id) NOT VALID;


--
-- TOC entry 3562 (class 2606 OID 16459)
-- Name: tbl_horses tblcatgender_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_horses
    ADD CONSTRAINT tblcatgender_id_fkey FOREIGN KEY (gender) REFERENCES public.tbl_cat_gender(id) NOT VALID;


--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 239
-- Name: TABLE tbl_bitacora_adiestramiento; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_adiestramiento TO app_readonly;


--
-- TOC entry 3755 (class 0 OID 0)
-- Dependencies: 241
-- Name: TABLE tbl_bitacora_alimentacion; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_alimentacion TO app_readonly;


--
-- TOC entry 3756 (class 0 OID 0)
-- Dependencies: 225
-- Name: TABLE tbl_bitacora_herraje; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_herraje TO app_readonly;


--
-- TOC entry 3757 (class 0 OID 0)
-- Dependencies: 243
-- Name: TABLE tbl_bitacora_hidratacion; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_hidratacion TO app_readonly;


--
-- TOC entry 3758 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE tbl_bitacora_peso; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_peso TO app_readonly;


--
-- TOC entry 3759 (class 0 OID 0)
-- Dependencies: 228
-- Name: TABLE tbl_bitacora_pista; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_pista TO app_readonly;


--
-- TOC entry 3760 (class 0 OID 0)
-- Dependencies: 235
-- Name: TABLE tbl_bitacora_resultados; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_resultados TO app_readonly;


--
-- TOC entry 3761 (class 0 OID 0)
-- Dependencies: 237
-- Name: TABLE tbl_bitacora_salto; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_salto TO app_readonly;


--
-- TOC entry 3762 (class 0 OID 0)
-- Dependencies: 227
-- Name: TABLE tbl_bitacora_vet; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.tbl_bitacora_vet TO app_readonly;


--
-- TOC entry 3763 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE tbl_cat_activity; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_activity TO app_readonly;


--
-- TOC entry 3764 (class 0 OID 0)
-- Dependencies: 244
-- Name: TABLE tbl_cat_alturas; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_alturas TO app_readonly;


--
-- TOC entry 3765 (class 0 OID 0)
-- Dependencies: 230
-- Name: TABLE tbl_cat_competencias; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_competencias TO app_readonly;


--
-- TOC entry 3766 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE tbl_cat_gender; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_gender TO app_readonly;


--
-- TOC entry 3767 (class 0 OID 0)
-- Dependencies: 245
-- Name: TABLE tbl_cat_modalidades; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_modalidades TO app_readonly;


--
-- TOC entry 3768 (class 0 OID 0)
-- Dependencies: 232
-- Name: TABLE tbl_cat_pista; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_cat_pista TO app_readonly;


--
-- TOC entry 3769 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE tbl_horses; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,UPDATE ON TABLE public.tbl_horses TO app_readonly;


--
-- TOC entry 3770 (class 0 OID 0)
-- Dependencies: 215
-- Name: TABLE tbl_users; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON TABLE public.tbl_users TO app_readonly WITH GRANT OPTION;


--
-- TOC entry 3771 (class 0 OID 0)
-- Dependencies: 214
-- Name: SEQUENCE tbl_users_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT ON SEQUENCE public.tbl_users_id_seq TO app_readonly WITH GRANT OPTION;


--
-- TOC entry 2115 (class 826 OID 16420)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT ON TABLES  TO app_readonly;


-- Completed on 2023-10-22 19:07:34 CEST

--
-- PostgreSQL database dump complete
--

