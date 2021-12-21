import home from '../../images/icons/home-acti.png'
import prize from '../../images/icons/prize-acti.png'
import schedule from '../../images/icons/schedule-acti.png'
import news from '../../images/icons/news-acti.png'
import events from '../../images/icons/events-acti.png'
import teams from '../../images/icons/teams-acti.png'
import photos from '../../images/icons/photos-acti.png'

const initialState = {
  loading: false,
  error: false,
  error_message: '',
  SEEMORE_CLICKING: false,
  width: 0,
  is_mobile: false,
  COLLAPSE_SIDEBAR: true,
  events: [],
  videos: [],
  schedule: {
    dates: [],
    matches: []
  },
  images: [],
  posts: [],
  teams: [],
  menus: [
    {
      id: 0,
      name: 'Trang chủ',
      icon: home,
      link: '/'
    },
    {
      id: 1,
      name: 'Giải thưởng',
      icon: prize,
      link: '/prize'
    },
    {
      id: 2,
      name: 'Lịch thi đấu',
      icon: schedule,
      link: '/schedule'
    },
    {
      id: 3,
      name: 'Tin tức',
      icon: news,
      link: '/news'
    },
    {
      id: 4,
      name: 'Sự kiện',
      icon: events,
      link: '/events'
    },
    {
      id: 5,
      name: 'Đội tuyển',
      icon: teams,
      link: '/teams'
    },
    {
      id: 6,
      name: 'Ảnh và Video',
      icon: photos,
      link: '/media'
    }
  ]
}

export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCEESED = "FETCH_SUCCEESED";
export const FETCH_ERROR = "FETCH_ERROR";
export const SEEMORE_CLICKING = "SEEMORE_CLICKING";
export const WINDOW_WIDTH = "WINDOW_WIDTH";
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";


export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STARTED:
        return {
          ...state,
          loading: true
        }

      case FETCH_SUCCEESED:
        return {
          ...state,
          loading: false
        }
  
      case FETCH_ERROR:
        return {
          ...state,
          error: true,
          error_message: 'Không thể tải dữ liệu!',
          loading: false
        }
      case SEEMORE_CLICKING:
        return {
          ...state,
          SEEMORE_CLICKING: true
        }
  
      case WINDOW_WIDTH:
        return {
          ...state,
          ...action.payload
        }
  
      case COLLAPSE_SIDEBAR:
        return {
          ...state,
          COLLAPSE_SIDEBAR: action.payload
        }
  
      default:
        return state
    }
}
