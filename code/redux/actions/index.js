
import * as type from '../constants';

export const sessionId = (sessionId) => {
    return {
        type: type.ADD_SESSIONID,
        sessionId
    }
}

export const emailId = (emailId) => {
    return {
        type: type.ADD_EMAIL_ID,
        emailId
    }
}

export const memberCategory = (memberCategory) => {
    return {
        type: type.ADD_MEMBERSHIP,
        memberCategory
    }
}

export const mobileNumber = (mobileNumber) => {
    return {
        type: type.ADD_MOBILENUMBER,
        mobileNumber
    }
}

export const slug = (slug) => {

    return {
        type: type.ADD_SLUG,
        slug
    }
}

export const profileId = (profileId) => {
    return {
        type: type.ADD_PROFILE,
        profileId
    }
}
export const replyBackTrack = (reply) => {
    return {
        type: type.REPLY_FLAG,
        reply
    }
}

export const memberAward = (memberAward) => {
    return {
        type: type.MEMBER_AWARD,
        memberAward
    }
}
export const memberBio = (memberBio) => {
    return {
        type: type.MEMBER_BIO,
        memberBio
    }
}
export const memberEducation = (memberEducation) => {
    return {
        type: type.MEMBER_EDUCATION,
        memberEducation
    }
}
export const memberEmployment = (memberEmployment) => {
    return {
        type: type.MEMBER_EMPLOYMENT,
        memberEmployment
    }
}
export const memberShip = (memberShip) => {
    return {
        type: type.MEMBER_SHIP,
        memberShip
    }
}
export const networkProfile = (networkProfile) => {
    return {
        type: type.NETWORK_PROFILE,
        networkProfile
    }
}

export const timelineBackTrack = (feedId) => {
    return {
        type: type.FEED_ID,
        feedId
    }
}

export const profilePic = (profilePic) => {
    return {
        type: type.PROFILE_PIC,
        profilePic
    }
}
export const profileBanner = (profileBanner) => {
    return {
        type: type.PROFILE_BANNER,
        profileBanner
    }
}
export const videoPreviewUrl = (videoPreviewUrl) => {
    return {
        type: type.VIDEO_PREVIEW_URL,
        videoPreviewUrl
    }
}
export const audioPreviewUrl = (audioPreviewUrl) => {
    return {
        type: type.AUDIO_PREVIEW_URL,
        audioPreviewUrl
    }
}

export const appTimelineTheme = (appTimelineTheme) => {
    return {
        type: type.APP_TIMELINE_THEME,
        appTimelineTheme
    }
}

 export const orientation = (orientation) => {
    return {
         type: type.ORIENTATION,
         orientation
     }
 }

 export const changeProfilePic = (changeProfilePic) => {
    return {
         type: type.CHANGEPROFILEPIC,
         changeProfilePic
     }
 }

 export const userRoles = (userRoles) => {
    return {
         type: type.USER_ROLES,
         userRoles
     }
 }



