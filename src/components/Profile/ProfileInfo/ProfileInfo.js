import React from "react";
import classes from './ProfileInfo.module.css'
export default (props) => {
    if(!props.profile) {
        return <div>Пользователь не предоставил информации о себе</div>
    }
    const contacts = props.profile.contacts;

    return (
        <>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos.large} alt="profilePhoto"/>
                <div>
                    Full name : {props.profile.fullName}
                </div>
                <div>
                    About me : {props.profile.aboutMe}
                </div>
                <pre>
                    {`My contacts:
    Facebook: ${contacts.facebook ? contacts.facebook : 'Нет аккаунта'}
    Website: ${contacts.website ? contacts.website : 'Нет аккаунта'}
    VK: ${contacts.vk ? contacts.vk : 'Нет аккаунта'}
    twitter: ${contacts.twitter ? contacts.twitter : 'Нет аккаунта'}
    youtube: ${contacts.youtube ? contacts.youtube : 'Нет аккаунта'}
    github: ${contacts.github ? contacts.github : 'Нет аккаунта'}
    mainLink: ${contacts.mainLink ? contacts.mainLink : 'Нет аккаунта'}
     `}
                </pre>
                <div>
                    Робота: {props.profile.lookingForAJob ? 'В активном поиске' : 'Работаю'}
                </div>
                <div>
                    Job description: {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </>
    )
}
