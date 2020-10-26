import React, { useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'

import ScrollLock from 'react-scrolllock'
import Header from '../../components/Header'

import Row from '../../styles/Row'
import Column from '../../styles/Column'
import Grid from '../../styles/Grid'

import Footer from '../../components/Footer'

const PostItem = () => {
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
    const router = useRouter()
    const { title, updateDate, tag, abstract, markdown, image } = router.query
    console.log(`abstract: ${abstract}`)

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
                                    <div
                                        style={{
                                            marginLeft: '10%',
                                            marginRight: '10%',
                                            marginTop: '2rem'
                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: '10px',
                                                background: `rgba(
                                                    244,
                                                    130,
                                                    0,
                                                    0.1
                                                )`,
                                                width: 'fit-content',
                                                height: 'auto',
                                                marginBottom: '0.5rem'
                                            }}
                                        >
                                            <h1
                                                style={{
                                                    color: '#F48200'
                                                }}
                                            >
                                                {tag}
                                            </h1>
                                        </div>

                                        <h3>{updateDate}</h3>

                                        <h1
                                            style={{
                                                fontSize: '2rem',
                                                fontWeight: 400
                                            }}
                                        >
                                            {title}
                                        </h1>

                                        <h2
                                            style={{
                                                fontSize: '1.33rem',
                                                fontWeight: 400,
                                                opacity: 0.6,
                                                marginTop: '1rem'
                                            }}
                                        >
                                            {abstract}
                                        </h2>

                                        <img
                                            style={{
                                                display: 'block',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                marginTop: '1rem',
                                                marginBottom: '1rem',
                                                width: '100%'
                                            }}
                                            src={image}
                                            alt=""
                                        />
                                        <div>
                                            <ReactMarkdown
                                                source={markdown}
                                                className="text-markdown"
                                                renderers={{
                                                    image: BlogImage
                                                }}
                                                transformImageUri={uri =>
                                                    uri.startsWith('http')
                                                        ? uri
                                                        : `${process.env.API_URL}${uri}`
                                                }
                                            />
                                        </div>
                                        <button
                                            style={{
                                                width: 'auto',
                                                paddingLeft: '8px',
                                                paddingRight: '8px',
                                                paddingTop: '5px',
                                                paddingBottom: '5px',
                                                height: 'auto',
                                                marginTop: '0.5rem',
                                                marginBottom: '0.5rem'
                                            }}
                                            onClick={() => Router.back()}
                                        >
                                            Voltar
                                        </button>
                                    </div>
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

export default PostItem

const BlogImage = props => {
    return (
        <img
            {...props}
            style={{
                maxWidth: '100%',
                marginTop: '1rem',
                marginBottom: '1rem'
            }}
        />
    )
}
