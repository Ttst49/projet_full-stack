import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";
import TicketComponent from "@/components/TicketComponent.vue";
import ArtistComponent from "@/components/ArtistComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import SponsorshipComponent from "@/components/SponsorshipComponent.vue";
import VenueCreateComponent from "@/components/VenueCreateComponent.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import LogoutUser from "@/components/LogoutUser.vue";
import PaymentComponent from "@/components/PaymentComponent.vue";
import TicketsComponent from "@/components/TicketsComponent.vue";
import SuccessComponent from "@/components/SuccessComponent.vue";
import DonationComponent from "@/components/DonationComponent.vue";
import EventShowComponent from "@/components/EventShowComponent.vue";
import ArtistShowComponent from "@/components/ArtistShowComponent.vue";
import VenueIndexComponent from "@/components/VenueIndexComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import ScanQrComponent from "@/components/ScanQrComponent.vue";
import EventCreateComponent from "@/components/EventCreateComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/home",
    redirect:'/'
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketsComponent
  },
  {
    path: '/artists',
    name: 'artists',
    component: ArtistComponent
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: SponsorshipComponent
  },
  {
    path: '/venue/create',
    name: 'venue/create',
    component: VenueCreateComponent
  },
  {
    path: "/login",
    component: LoginForm
  },
  {
    path: "/register",
    component: RegisterForm
  },
  {
    path: "/logout",
    component: LogoutUser
  },
  {
    path: "/payment",
    component: PaymentComponent
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: TicketComponent
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessComponent
  },
  {
    path: '/donation',
    name: 'donation',
    component: DonationComponent

  },
  {
    path: '/venue',
    name: 'venueAll',
    component: VenueIndexComponent
  },
  {
    path: '/event/show',
    name: 'eventShow',
    component: EventShowComponent
  },
  {
    path: "/artist/show",
    component: ArtistShowComponent
  },
  {
    path: "/cart",
    component: CartComponent
  },
  {
    path: '/scan-QrCode',
    name: 'scanQrCode',
    component: ScanQrComponent
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorComponent
  },
  {
    path: '/event/create',
    name: 'event/create',
    component: EventCreateComponent
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
