import React from 'react'
import type { FC } from 'react'
import { TabBar } from 'antd-mobile'
import {
    Route,
    Routes,
    useNavigate,
    useLocation,
    MemoryRouter as Router,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'


import Home from '@/pages/Home'
import Todo from '@/pages/Todo'
import Message from '@/pages/Message'
import PersonalCenter from '@/pages/PersonalCenter'

import styles from './index.module.less'

const Bottom: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value: string) => {
        navigate(value)
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

export default () => {
    return (
        <Router initialEntries={['/home']}>
            <div className={styles.app}>
                <div className={styles.body}>
                    <Routes>
                        <Route path='/home' element={<Home />}>
                        </Route>
                        <Route path='/todo' element={<Todo />}>
                        </Route>
                        <Route path='/message' element={<Message />}>
                        </Route>
                        <Route path='/me' element={<PersonalCenter />}>
                        </Route>
                    </Routes>
                </div>
                <div className={styles.bottom}>
                    <Bottom />
                </div>
            </div>
        </Router>
    )
}
