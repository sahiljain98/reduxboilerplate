
import * as type from '../../constants';

const initialUserState = {
    emailId: [],
    sessionId: '',
    memberCategory: {},
    mobileNumber: '',
    socket: {},
    slug: '',
    replyFlag: '',
    profileId: '',
    memberAward: '',
    memberBio: '',
    memberEducation: '',
    memberEmployment: '',
    memberShip: '',
    networkProfile: '',
    feedId: '',

    profilePic: '',
    profileBanner: '',
    videoPreviewUrl: '',
    audioPreviewUrl: '',

    appTimelineTheme: '',
    orientation: '',
    changeProfilePic: '',
    userRole: ''
}

const service = (state = initialUserState, action) => {

    switch (action.type) {
        case type.ADD_EMAILARRAY:
            return {
                ...state,
                emailId: action.emailId
            }

        case type.ADD_SESSIONID:
            return {
                ...state,
                sessionId: action.sessionId
            }


        case type.ADD_MEMBERSHIP:
            return {
                ...state,
                memberCategory: action.memberCategory
            }

        case type.ADD_MOBILENUMBER:
            return {
                ...state,
                mobileNumber: action.mobileNumber
            }

        case type.ADD_SLUG:
            return {
                ...state,
                slug: action.slug
            }

        case type.ADD_PROFILE:
            return {
                ...state,
                profileId: action.profileId
            }

        case type.REPLY_FLAG:
            return {
                ...state,
                replyFlag: action.replyFlag
            }

        case type.MEMBER_AWARD:
            return {
                ...state,
                memberAward: action.memberAward
            }

        case type.MEMBER_BIO:
            return {
                ...state,
                memberBio: action.memberBio
            }

        case type.MEMBER_EDUCATION:
            return {
                ...state,
                memberEducation: action.memberEducation
            }

        case type.MEMBER_EMPLOYMENT:
            return {
                ...state,
                memberEmployment: action.memberEmployment
            }

        case type.MEMBER_SHIP:
            return {
                ...state,
                memberShip: action.memberShip
            }

        case type.NETWORK_PROFILE:
            return {
                ...state,
                networkProfile: action.networkProfile
            }
        case type.FEED_ID:
            return {
                ...state,
                feedId: action.feedId
            }

        case type.PROFILE_PIC:
            return {
                ...state,
                profilePic: action.profilePic
            }
        case type.PROFILE_BANNER:
            return {
                ...state,
                profileBanner: action.profileBanner
            }
        case type.VIDEO_PREVIEW_URL:
            return {
                ...state,
                videoPreviewUrl: action.videoPreviewUrl
            }
        case type.AUDIO_PREVIEW_URL:
            return {
                ...state,
                audioPreviewUrl: action.audioPreviewUrl
            }
        case type.APP_TIMELINE_THEME:
            return {
                ...state,
                appTimelineTheme: action.appTimelineTheme
            }
        case type.ORIENTATION:
            return {
                ...state,
                orientation: action.orientation
            }
        case type.CHANGEPROFILEPIC:
            return {
                ...state,
                changeProfilePic: action.changeProfilePic
            }

        case type.USER_ROLES:
            return {
                ...state,
                userRole: action.userRole
            }


        default:
            return state
    }

}

export default service;