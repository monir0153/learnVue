import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-View.vue'
import About from '../views/About-View.vue'
import Jobs from '@/views/jobs/Jobs.vue'
import JobDetails from '@/views/jobs/Job-details.vue'
import NotFound from '@/views/Not-Found.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/alljobs',
    redirect: '/jobs'
  },
  // Catchall 404
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes
})
export default router
