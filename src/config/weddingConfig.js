import { assets } from './assets';

export const weddingConfig = {
  // ─── Main Banner & Metadata ──────────────────────────────
  blessingHeader: '|| ॐ श्री गणेशाय नमः ||',
  bengaliBlessing: 'শুভ বিবাহ',
  hashtag: '#AyushWedsSatakshi',

  // ─── Couple Info ──────────────────────────────────────────
  groom: {
    firstName: 'Ayush',
    lastName: 'Mukherjee',
    father: 'Mr. Piyush Mukherjee',
    mother: 'Mrs. Jhuma Mukherjee',
    grandfather: 'Late Mr.P.N. Mukherjee',
    grandmother: 'Late Mrs. Bithi Mukherjee',
  },
  bride: {
    firstName: 'Satakshi',
    lastName: 'Bhattacharjee',
    father: 'Mr. Biplab Bhattacharjee',
    mother: 'Mrs. Chinmayee Bhattacharjee',
    grandfather: 'Late Mr. R.K. Bhattacharjee',
    grandmother: 'Late Mrs. Bijaya Bhattacharjee',
  },

  // ─── Save The Date Section ────────────────────────────────
  saveTheDate: {
    eyebrow: "Don't miss the celebration",
    title: 'SAVE THE DATE',
    dateText: '23rd November 2026',
    dates: '23rd November 2026',
  },

  // ─── Venue Details ────────────────────────────────────────
  venue: {
    label: 'WHERE WE CELEBRATE',
    name: 'Hotel RA Vista',
    city: 'Kolkata',
    fullAddress: 'Dum Dum,Near International Airport Kolkata',
    tagline: 'Where our forever begins.',
    mapsUrl:
      'https://www.google.com/maps/place/Hotel+Ra+Vista/@22.6439183,88.4325539,17z/data=!3m1!4b1!4m9!3m8!1s0x39f89f0044c77801:0x425b27447e9b5506!5m2!4m1!1i2!8m2!3d22.6439183!4d88.4325539!16s%2Fg%2F11vrds143l?entry=ttu',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.493976867375!2d88.4325539!3d22.6439183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f0044c77801%3A0x425b27447e9b5506!2sHotel%20Ra%20Vista!5e0!3m2!1sen!2sin!4v1726859000000!5m2!1sen!2sin',
  },

  // ─── Events Schedule Section ──────────────────────────────
  eventsScheduleHeader: {
    title: 'RECEPTION\nCELEBRATION',
    subtitle: 'CELEBRATE WITH US',
  },

  events: [
    {
      id: 'reception',
      title: 'RECEPTION\nCEREMONY',
      hashtag: '#CheersToTheNewlyWeds',
      joinText: 'Join us for an evening of music, dinner, and celebrations!',
      tagline: "Here's to Love,Laughter and a Night to remember.",
      date: '23rd November 2026',
    },
  ],

  // ─── Opening & Cover Invitation Details ───────────────────
  invitation: {
    monogram: 'AS',
    blessing: '|| Om Shree Ganeshaya Namah ||',
    shloka: {
      devanagari:
        'মঙ্গলং ভগবান বিষ্ণুঃ মঙ্গলং গরুড়ধ্বজঃ ।\nমঙ্গলং পুণ্ডরীকাক্ষঃ মঙ্গলায় তনো হরিঃ ।।',
      roman:
        'MANGALAM BHAGWAN VISHNU · MANGALAM GARUDADHWAJAH\nMANGALAM PUNDARIKAKSHAH · MANGALAYA TANO HARIH',
    },
    inviteText:
      'We request the honor of your gracious presence to celebrate the Wedding Reception Party of',
    dates: '23rd November 2026',
    coverTitle: 'Reception\nInvitation',
    coverSubtitle: 'Ayush & Satakshi',
    coverTapHint: '✦ TAP SEAL TO OPEN ✦',
    closingWithLove: 'WITH LOVE',
    assets: assets.opening,
  },
};
