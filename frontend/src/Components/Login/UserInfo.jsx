
import React from 'react';

export function UserInfo({ user }) {
    if (!user) return null; // 如果没有用户信息，则不渲染任何内容

    return (
        <div className="user-info">
            <p> username:{user.username} &nbsp;&nbsp;
            role: {user.role}</p>
        </div>
    );
}


