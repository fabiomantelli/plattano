import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { GetServerSideProps } from 'next'

import ScrollLock from 'react-scrolllock'
import Header from '../components/Header'

import Row from '../styles/Row'
import Column from '../styles/Column'
import Grid from '../styles/Grid'
import { BoxDefaultContainer } from '../styles/Containers'

const Blog: React.FC = ({ posts, page, numberOfPosts }) => {
    const [active, SetActive] = useState('initial')
    const [mobile, SetMobile] = useState(false)

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

    const dateUnix = Date.parse(posts[0].created_at)
    const date = new Date(dateUnix)
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()

    console.log(posts)
    const router = useRouter()
    const lastPage = Math.ceil(numberOfPosts / 2)

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
                                style={{
                                    marginTop: '70px'
                                }}
                            >
                                <Column
                                    size={1}
                                    marginLeft={2}
                                    marginRight={2}
                                    maxWidth={1280}
                                >
                                    <BoxDefaultContainer
                                        style={{
                                            height: 'auto',
                                            marginTop: '50'
                                        }}
                                    >
                                        <ul>
                                            {posts.map(post => (
                                                <li
                                                    key={post.id}
                                                    style={{
                                                        marginTop: '1rem'
                                                    }}
                                                >
                                                    <hr />
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'row',
                                                            justifyContent:
                                                                'space-between',
                                                            maxWidth: '1280px'
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                marginTop:
                                                                    '1rem'
                                                            }}
                                                        >
                                                            <h1>
                                                                {post.title}
                                                            </h1>

                                                            <time>{`${day} de ${monthsOfTheYear[month]} de ${year}`}</time>
                                                            <h2
                                                                style={{
                                                                    color:
                                                                        '#F48200'
                                                                }}
                                                            >
                                                                {post.tag}
                                                            </h2>
                                                            <p>
                                                                {post.abstract}
                                                            </p>
                                                            <p>
                                                                <Link
                                                                    href={{
                                                                        pathname: `/posts/[title]`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            tag:
                                                                                post.tag,
                                                                            abstract:
                                                                                post.abstract,
                                                                            description:
                                                                                post.description,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .thumbnail
                                                                                    .url
                                                                        }
                                                                    }}
                                                                    as={{
                                                                        pathname: `/posts/${post.title}`,
                                                                        query: {
                                                                            title:
                                                                                post.title,
                                                                            tag:
                                                                                post.tag,
                                                                            abstract:
                                                                                post.abstract,
                                                                            description:
                                                                                post.description,
                                                                            image:
                                                                                process
                                                                                    .env
                                                                                    .API_URL +
                                                                                post
                                                                                    .image[0]
                                                                                    .formats
                                                                                    .thumbnail
                                                                                    .url
                                                                        }
                                                                    }}
                                                                >
                                                                    <a>
                                                                        {
                                                                            post.title
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </p>
                                                        </div>
                                                        <img
                                                            style={{
                                                                margin: '1rem'
                                                            }}
                                                            key={
                                                                post.image[0].id
                                                            }
                                                            src={
                                                                process.env
                                                                    .API_URL +
                                                                post.image[0]
                                                                    .formats
                                                                    .thumbnail
                                                                    .url
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <hr />
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() =>
                                                router.push(
                                                    `/blog?page=${page - 1}`
                                                )
                                            }
                                            disabled={page <= 1}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() =>
                                                router.push(
                                                    `/blog?page=${page + 1}`
                                                )
                                            }
                                            disabled={page >= lastPage}
                                        >
                                            Next
                                        </button>
                                    </BoxDefaultContainer>
                                </Column>
                            </Row>
                        </section>
                    </main>
                </Grid>
            </ScrollLock>
        </>
    )
}

export default Blog

interface IData {
    id: number
    description: string
    image: string
}

export const getServerSideProps: GetServerSideProps = async ({
    query: { page = 1 }
}) => {
    const start = +page === 1 ? 0 : (+page - 1) * 2

    const numberOfPostsResponse = await fetch(
        `${process.env.API_URL}/posts/count`
    )
    const numberOfPosts = await numberOfPostsResponse.json()

    const res = await fetch(
        `${process.env.API_URL}/posts?_start=${start}&_limit=${2}`
    )
    const data = await res.json()

    return {
        props: {
            posts: data,
            page: +page,
            numberOfPosts
        }
    }
}
