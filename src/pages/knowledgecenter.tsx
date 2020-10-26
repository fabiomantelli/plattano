import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

import ScrollLock from 'react-scrolllock'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import Header from '../components/Header'

import {
    HexagonContainer,
    ImageContainer,
    MainContainer
} from '../styles/Containers'

import {
    HexagonParagraph,
    HexagonTitle,
    SubTitle,
    Title
} from '../styles/TextElements'

import { ButtonElement } from '../styles/Buttons'
import News from '../components/News'
import Email from '../components/Email'
import Footer from '../components/Footer'
import Link from 'next/link'

import {
    BlogAbstract,
    BlogContainer,
    BlogDate,
    BlogLink,
    BlogLinkMini
} from '../styles/BlogElements'

interface IDataTwoLastPosts {
    id: number
    title: string
    updateDate: string
    abstract: string
    description: string
    created_at: string
    image: string[]
    markdown?: string
}

interface IProps {
    posts: IDataTwoLastPosts[]
    page: number
    numberOfPosts: number
    dataTwoLastPosts: IDataTwoLastPosts[]
    start: number
}

const Knowledgecenter: React.FC<IProps> = ({
    posts,
    page,
    numberOfPosts,
    dataTwoLastPosts,
    start
}) => {
    const [active, SetActive] = useState('initial')
    const [mobile, SetMobile] = useState(false)
    const [pageOn, setPageOn] = useState(page)

    const openHandler = () => {
        if (active === 'active') {
            SetActive('not-active')
            SetMobile(false)
            console.log(active)
        } else {
            console.log(active)
            SetActive('active')
            SetMobile(true)
        }
    }

    const monthsOfTheYear = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    console.log(`dataTwo: ${JSON.stringify(dataTwoLastPosts)}`)
    const dateUnix = Date.parse(posts[0].created_at)
    const date = new Date(dateUnix)
    const month: number = date.getMonth()
    const day: number = date.getDate()
    const year: number = date.getFullYear()
    console.log(`page: ${page}`)
    const updateDate = `${day} de ${monthsOfTheYear[
        month
    ].toLowerCase()}, ${year}`

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Plattano Technologies</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <ScrollLock isActive={mobile}>
                <Grid>
                    <Header click={openHandler} active={active} />

                    <main>
                        <section>
                            <Row
                                background={true}
                                polygon={true}
                                style={{ marginTop: '70px' }}
                            >
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <MainContainer
                                        changedMediaQueries="tabletOn"
                                        url="/assets/knowledge-center/knowledgecenter-image.png"
                                        backgroundSize="cover"
                                    >
                                        <Title>
                                            Knowledge <br /> Center
                                        </Title>
                                        <SubTitle changedMediaQueries="tabletOn">
                                            “O desejo profundo da humanidade
                                            pelo conhecimento é justificativa
                                            suficiente para nossa busca
                                            contínua.” <b>STEPHEN HAWKING </b>
                                        </SubTitle>
                                        <SubTitle
                                            changedMediaQueries="tabletOn"
                                            style={{ marginTop: '2rem' }}
                                        >
                                            Acompanhe a Pláttano em nosso blog
                                            oficial e tenha também acesso
                                            exclusivo aos nossos materiais
                                            exclusivos
                                        </SubTitle>
                                    </MainContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                    style={{
                                        marginBottom: '2rem',
                                        marginTop: '2rem'
                                    }}
                                >
                                    <h1
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 400
                                        }}
                                    >
                                        Blog
                                    </h1>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    collapse="tabletOn"
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={844}
                                >
                                    <div>
                                        <BlogContainer>
                                            {dataTwoLastPosts
                                                .map(post => (
                                                    <div
                                                        key={post.id}
                                                        style={{
                                                            width: '50%',
                                                            marginRight: '1rem'
                                                        }}
                                                    >
                                                        <img
                                                            style={{
                                                                width: '100%'
                                                            }}
                                                            key={
                                                                post.image[0].id
                                                            }
                                                            src={
                                                                process.env
                                                                    .API_URL +
                                                                post.image[0]
                                                                    .formats
                                                                    .small.url
                                                            }
                                                            alt=""
                                                        />
                                                        <div>
                                                            <Link
                                                                href={{
                                                                    pathname: `/posts/[title]`,
                                                                    query: {
                                                                        title:
                                                                            post.title,
                                                                        updateDate: updateDate,
                                                                        tag:
                                                                            post.tag,

                                                                        abstract:
                                                                            post.abstract,
                                                                        markdown:
                                                                            post.markdown,
                                                                        image:
                                                                            process
                                                                                .env
                                                                                .API_URL +
                                                                            post
                                                                                .image[0]
                                                                                .formats
                                                                                .medium
                                                                                .url
                                                                    }
                                                                }}
                                                                as={{
                                                                    pathname: `/posts/${post.title}`,
                                                                    query: {
                                                                        title:
                                                                            post.title,
                                                                        updateDate: updateDate,
                                                                        abstract:
                                                                            post.abstract,
                                                                        markdown:
                                                                            post.markdown,
                                                                        image:
                                                                            process
                                                                                .env
                                                                                .API_URL +
                                                                            post
                                                                                .image[0]
                                                                                .formats
                                                                                .medium
                                                                                .url
                                                                    }
                                                                }}
                                                            >
                                                                <BlogLink>
                                                                    {post.title}
                                                                </BlogLink>
                                                            </Link>
                                                            <BlogAbstract>
                                                                {post.abstract.slice(
                                                                    0,
                                                                    150
                                                                ) + '...'}
                                                            </BlogAbstract>
                                                            <BlogDate>
                                                                {updateDate}
                                                            </BlogDate>
                                                        </div>
                                                    </div>
                                                ))
                                                .reverse()}
                                        </BlogContainer>
                                    </div>
                                </Column>

                                <Column
                                    collapse="tabletOn"
                                    size={1}
                                    marginRight={2}
                                    maxWidth={400}
                                >
                                    <div>
                                        <h1
                                            style={{
                                                fontSize: '1.33',
                                                fontWeight: 400
                                            }}
                                        >
                                            Mais recentes
                                        </h1>
                                        <ul>
                                            {posts
                                                .map(post => (
                                                    <li
                                                        key={post.id}
                                                        style={{
                                                            marginTop: '0.5rem',
                                                            listStyleType:
                                                                'none'
                                                        }}
                                                    >
                                                        <hr />
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                                justifyContent:
                                                                    'flex-end',
                                                                width: '100%'
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    marginTop:
                                                                        '1rem'
                                                                }}
                                                            >
                                                                <Link
                                                                    href={{
                                                                        pathname: `/posts/[title]`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            updateDate: updateDate,
                                                                            tag:
                                                                                post.tag,

                                                                            abstract:
                                                                                post.abstract,
                                                                            markdown:
                                                                                post.markdown,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .medium
                                                                                    .url
                                                                        }
                                                                    }}
                                                                    as={{
                                                                        pathname: `/posts/${post.title}`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            updateDate: updateDate,
                                                                            abstract:
                                                                                post.abstract,
                                                                            markdown:
                                                                                post.markdown,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .medium
                                                                                    .url
                                                                        }
                                                                    }}
                                                                >
                                                                    <BlogLinkMini>
                                                                        {
                                                                            post.title
                                                                        }
                                                                    </BlogLinkMini>
                                                                </Link>
                                                                <BlogDate>
                                                                    {updateDate}
                                                                </BlogDate>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width:
                                                                        '100%',
                                                                    marginLeft:
                                                                        '1rem',
                                                                    display:
                                                                        'flex',
                                                                    justifyContent:
                                                                        'flex-end'
                                                                }}
                                                            >
                                                                <img
                                                                    style={{
                                                                        margin:
                                                                            '1rem',
                                                                        maxWidth:
                                                                            '180px',
                                                                        width:
                                                                            '100%',
                                                                        height:
                                                                            'auto'
                                                                    }}
                                                                    key={
                                                                        post
                                                                            .image[0]
                                                                            .id
                                                                    }
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .API_URL +
                                                                        post
                                                                            .image[0]
                                                                            .formats
                                                                            .thumbnail
                                                                            .url
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </li>
                                                ))
                                                .reverse()}
                                        </ul>
                                        <div style={{ marginTop: '0.5rem' }}>
                                            <button
                                                disabled={
                                                    pageOn === page ||
                                                    page >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    height: 'auto',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() =>
                                                    router.push(
                                                        `/knowledgecenter?page=${page}`
                                                    )
                                                }
                                            >
                                                {page}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 1 ||
                                                    page + 1 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    height: 'auto',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 1
                                                        }`
                                                    )
                                                    setPageOn(page + 1)
                                                }}
                                            >
                                                {page + 1}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 2 ||
                                                    page + 2 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 2
                                                        }`
                                                    )
                                                    setPageOn(page + 2)
                                                }}
                                            >
                                                {page + 2}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 3 ||
                                                    page + 3 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 3
                                                        }`
                                                    )
                                                    setPageOn(page + 3)
                                                }}
                                            >
                                                {page + 3}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 4 ||
                                                    page + 4 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 4
                                                        }`
                                                    )
                                                    setPageOn(page + 4)
                                                }}
                                            >
                                                {page + 4}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 5 ||
                                                    page + 5 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 5
                                                        }`
                                                    )
                                                    setPageOn(page + 5)
                                                }}
                                            >
                                                {page + 5}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 6 ||
                                                    page + 6 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 6
                                                        }`
                                                    )
                                                    setPageOn(page + 6)
                                                }}
                                            >
                                                {page + 6}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 7 ||
                                                    page + 7 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 7
                                                        }`
                                                    )
                                                    setPageOn(page + 7)
                                                }}
                                            >
                                                {page + 7}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 8 ||
                                                    page + 8 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 8
                                                        }`
                                                    )
                                                    setPageOn(page + 8)
                                                }}
                                            >
                                                {page + 8}
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                style={{
                                                    width: 'fit-content',
                                                    padding: '0.1rem',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.2rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page - 1
                                                        }`
                                                    )
                                                    setPageOn(page - 1)
                                                }}
                                                disabled={page <= 1}
                                            >
                                                Anterior
                                            </button>
                                            <button
                                                style={{
                                                    width: 'fit-content',
                                                    padding: '0.1rem',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.2rem',
                                                    marginLeft: '0.2rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 1
                                                        }`
                                                    )
                                                    setPageOn(page + 1)
                                                }}
                                                disabled={start === 0}
                                            >
                                                Próximo
                                            </button>
                                        </div>
                                    </div>
                                </Column>

                                {/* Rever esse codigo repetido */}
                                <Column
                                    collapse="tabletOff"
                                    size={1}
                                    marginRight={2}
                                    marginLeft={2}
                                    maxWidth={1280}
                                >
                                    <div>
                                        <h1
                                            style={{
                                                fontSize: '1.33',
                                                fontWeight: 400
                                            }}
                                        >
                                            Mais recentes
                                        </h1>
                                        <ul>
                                            {posts
                                                .map(post => (
                                                    <li
                                                        key={post.id}
                                                        style={{
                                                            marginTop: '0.5rem',
                                                            listStyleType:
                                                                'none'
                                                        }}
                                                    >
                                                        <hr />
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                                justifyContent:
                                                                    'flex-end'
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    marginTop:
                                                                        '1rem',
                                                                    width:
                                                                        '100%',
                                                                    height:
                                                                        'auto'
                                                                }}
                                                            >
                                                                <Link
                                                                    href={{
                                                                        pathname: `/posts/[title]`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            updateDate: updateDate,
                                                                            tag:
                                                                                post.tag,

                                                                            abstract:
                                                                                post.abstract,
                                                                            markdown:
                                                                                post.markdown,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .medium
                                                                                    .url
                                                                        }
                                                                    }}
                                                                    as={{
                                                                        pathname: `/posts/${post.title}`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            updateDate: updateDate,
                                                                            abstract:
                                                                                post.abstract,
                                                                            markdown:
                                                                                post.markdown,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .medium
                                                                                    .url
                                                                        }
                                                                    }}
                                                                >
                                                                    <BlogLink>
                                                                        {
                                                                            post.title
                                                                        }
                                                                    </BlogLink>
                                                                </Link>
                                                                <BlogAbstract>
                                                                    {post.abstract.slice(
                                                                        0,
                                                                        150
                                                                    ) + '...'}
                                                                </BlogAbstract>
                                                                <BlogDate>
                                                                    {updateDate}
                                                                </BlogDate>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width:
                                                                        '100%',
                                                                    marginRight:
                                                                        '2rem'
                                                                }}
                                                            >
                                                                <img
                                                                    style={{
                                                                        margin:
                                                                            '1rem',
                                                                        width:
                                                                            '100%',
                                                                        height:
                                                                            'auto'
                                                                    }}
                                                                    key={
                                                                        post
                                                                            .image[0]
                                                                            .id
                                                                    }
                                                                    src={
                                                                        process
                                                                            .env
                                                                            .API_URL +
                                                                        post
                                                                            .image[0]
                                                                            .formats
                                                                            .thumbnail
                                                                            .url
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr
                                                            style={{
                                                                marginTop:
                                                                    '1rem'
                                                            }}
                                                        />
                                                    </li>
                                                ))
                                                .reverse()}
                                        </ul>
                                        <div>
                                            <button
                                                disabled={
                                                    pageOn === page ||
                                                    page >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    height: 'auto',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() =>
                                                    router.push(
                                                        `/knowledgecenter?page=${page}`
                                                    )
                                                }
                                            >
                                                {page}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 1 ||
                                                    page + 1 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    height: 'auto',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 1
                                                        }`
                                                    )
                                                    setPageOn(page + 1)
                                                }}
                                            >
                                                {page + 1}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 2 ||
                                                    page + 2 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 2
                                                        }`
                                                    )
                                                    setPageOn(page + 2)
                                                }}
                                            >
                                                {page + 2}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 3 ||
                                                    page + 3 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 3
                                                        }`
                                                    )
                                                    setPageOn(page + 3)
                                                }}
                                            >
                                                {page + 3}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 4 ||
                                                    page + 4 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 4
                                                        }`
                                                    )
                                                    setPageOn(page + 4)
                                                }}
                                            >
                                                {page + 4}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 5 ||
                                                    page + 5 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 5
                                                        }`
                                                    )
                                                    setPageOn(page + 5)
                                                }}
                                            >
                                                {page + 5}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 6 ||
                                                    page + 6 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 6
                                                        }`
                                                    )
                                                    setPageOn(page + 6)
                                                }}
                                            >
                                                {page + 6}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 7 ||
                                                    page + 7 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 7
                                                        }`
                                                    )
                                                    setPageOn(page + 7)
                                                }}
                                            >
                                                {page + 7}
                                            </button>
                                            <button
                                                disabled={
                                                    pageOn === page + 8 ||
                                                    page + 8 >
                                                        Math.ceil(
                                                            numberOfPosts / 4
                                                        )
                                                }
                                                style={{
                                                    width: 'auto',
                                                    height: 'auto',
                                                    paddingLeft: '2px',
                                                    paddingRight: '2px',
                                                    margin: '0.1rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 8
                                                        }`
                                                    )
                                                    setPageOn(page + 8)
                                                }}
                                            >
                                                {page + 8}
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                style={{
                                                    width: 'fit-content',
                                                    padding: '0.1rem',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.2rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page - 1
                                                        }`
                                                    )
                                                    setPageOn(page - 1)
                                                }}
                                                disabled={page <= 1}
                                            >
                                                Anterior
                                            </button>
                                            <button
                                                style={{
                                                    width: 'fit-content',
                                                    padding: '0.1rem',
                                                    fontSize: '0.8rem',
                                                    marginTop: '0.2rem',
                                                    marginLeft: '0.2rem'
                                                }}
                                                onClick={() => {
                                                    router.push(
                                                        `/knowledgecenter?page=${
                                                            page + 1
                                                        }`
                                                    )
                                                    setPageOn(page + 1)
                                                }}
                                                disabled={start === 0}
                                            >
                                                Próximo
                                            </button>
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row>
                                <Column
                                    size={1}
                                    collapse="mobileOn"
                                    maxWidth={622}
                                    marginLeft={2}
                                >
                                    <ImageContainer>
                                        <img
                                            src="/assets/knowledge-center/documentation.png"
                                            alt="Documentation Image"
                                        />
                                    </ImageContainer>
                                </Column>
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginRight={2}
                                    marginLeft={2}
                                >
                                    <HexagonContainer changedMediaQueries="mobileOn">
                                        <HexagonTitle>
                                            Documentação
                                        </HexagonTitle>
                                        <HexagonParagraph>
                                            Acesse nosso conteúdo de materiais,
                                            manuais e procedimentos. Descubra
                                            como configurar nossos serviços e
                                            produtos aqui
                                        </HexagonParagraph>

                                        <ButtonElement>
                                            Saiba Mais
                                        </ButtonElement>
                                    </HexagonContainer>
                                </Column>
                            </Row>
                        </section>

                        <section>
                            <Row background={true} collapse="mobileOn">
                                <Column
                                    size={1}
                                    maxWidth={622}
                                    marginLeft={2}
                                    marginRight={2}
                                >
                                    <News />
                                </Column>
                                <Column size={1} maxWidth={622} marginRight={2}>
                                    <Email />
                                </Column>
                            </Row>

                            <Row background={true} collapse="mobileOff">
                                <Column size={1} marginRight={2} marginLeft={2}>
                                    <News />
                                    <Email />
                                </Column>
                            </Row>
                        </section>
                    </main>
                    <Footer />
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Knowledgecenter

interface IData {
    id: number
    description: string
    image: string
}

export const getServerSideProps: GetServerSideProps = async ({
    query: { page = 1 }
}) => {
    const numberOfPostsResponse = await fetch(
        `${process.env.API_URL}/posts/count`
    )
    const numberOfPosts = await numberOfPostsResponse.json()

    let limit = 4
    const postIndex = numberOfPosts - +page * 4
    const start = postIndex < 0 ? 0 : postIndex

    if (postIndex === -1) {
        limit = 3
    } else if (postIndex < -1) {
        limit = 2
    } else if (postIndex < -2) {
        limit = 1
    } else {
        limit = 4
    }

    const res = await fetch(
        `${process.env.API_URL}/posts?_start=${start}&_limit=${limit}`
    )
    const data = await res.json()

    const resTwoLastPosts = await fetch(
        `${process.env.API_URL}/posts?_start=${numberOfPosts - 2}&_limit=${2}`
    )
    const dataTwoLastPosts = await resTwoLastPosts.json()

    return {
        props: {
            posts: data,
            page: +page,
            numberOfPosts,
            dataTwoLastPosts,
            start
        }
    }
}
