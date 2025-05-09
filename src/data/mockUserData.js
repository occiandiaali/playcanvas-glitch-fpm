const mockUserData = [
    {
        id: 1,
      img: "https://publicdomainvectors.org/tn_img/notabee.webp",
      title: "Bed",
      author: "swabdesign",
     voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Justice_Genesis_first_30_seconds_tight.wav"//"/audio/alien-talking.mp3"
    },
    {
        id: 2,
      // img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      img: "https://publicdomainvectors.org/tn_img/14thWarrior-Cartoon-Elephant.webp",
      title: "Books",
      author: "Pavel Nekoranec",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/crazy-robot.mp3"
    },
    {
        id: 3,
      // img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      img: "https://publicdomainvectors.org/tn_img/japanesedoctor.webp",
      title: "Sink",
      author: "Charles Deluvio",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/sine_wave_32768_128.wav"//"/audio/french-canadian-woman.mp3"
    },
    {
        id: 4,
      //  img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      img: "https://publicdomainvectors.org/tn_img/Cartoonhead7.webp",
      title: "Kitchen",
      author: "Christian Mackie",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/2500_hz_sine_2_seconds.wav"//"/audio/man-apologizes.mp3"
    },
    {
        id: 5,
      //  img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      img: "https://publicdomainvectors.org/tn_img/Devil_001_Head_Cartoon.webp",
      title: "Blinds",
      author: "Darren Richardson",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/dramatic-female.mp3"
    },
    {
        id: 6,
      //  img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      img: "https://publicdomainvectors.org/tn_img/painted_face.webp",
      title: "Chairs",
      author: "Taylor Simpson",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/sine_wave_32768_128.wav"//"/audio/weird-talking.mp3"
    },
    {
        id: 7,
      //  img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      img: "https://publicdomainvectors.org/tn_img/FunDraw_dot_com_Cartoon_Cat_In_Rainbow_Socks.webp",
      title: "Laptop",
      author: "Ben Kolde",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/woman-crying.mp3"
    },
    {
        id: 8,
      // img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      img: "https://publicdomainvectors.org/tn_img/wsnaccad_gloria_the_architect.webp",
      title: "Doors",
      author: "Philipp Berndt",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/2500_hz_sine_2_seconds.wav"//"/audio/alien-talking.mp3"
    },
    {
        id: 9,
      // img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      img: "https://publicdomainvectors.org/tn_img/googley-eye-birds.webp",
      title: "Coffee",
      author: "Jen P.",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/crazy-robot.mp3"
    },
    {
        id: 10,
      //  img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      img: "https://publicdomainvectors.org/tn_img/010b.webp",
      title: "Storage",
      author: "Douglas Sheppard",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Justice_Genesis_first_30_seconds_tight.wav" //"/audio/french-canadian-woman.mp3"
    },
    {
        id: 11,
      //  img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      img: "https://publicdomainvectors.org/tn_img/1274533168.webp",
      title: "Candle",
      author: "Fi Bell",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Justice_Genesis_first_third_sec_tight.wav"//"/audio/dramatic-female.mp3"
    },
    {
        id: 12,
      //  img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      img: "https://publicdomainvectors.org/tn_img/Cartoon_Butterfly_01.webp",
      title: "Coffee table",
      author: "Hutomo Abrianto",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Justice_Genesis_first_30_seconds_tight.wav"//"/audio/man-apologizes.mp3"
    },
       {
        id: 13,
      img: "https://publicdomainvectors.org/tn_img/notabee.webp",
      title: "Bed",
      author: "swabdesign",
     voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Justice_Genesis_first_30_seconds_tight.wav"//"/audio/alien-talking.mp3"
    },
    {
        id: 14,
      // img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      img: "https://publicdomainvectors.org/tn_img/14thWarrior-Cartoon-Elephant.webp",
      title: "Books",
      author: "Pavel Nekoranec",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/crazy-robot.mp3"
    },
    {
        id: 15,
      // img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      img: "https://publicdomainvectors.org/tn_img/japanesedoctor.webp",
      title: "Sink",
      author: "Charles Deluvio",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/sine_wave_32768_128.wav"//"/audio/french-canadian-woman.mp3"
    },
    {
        id: 16,
      //  img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      img: "https://publicdomainvectors.org/tn_img/Cartoonhead7.webp",
      title: "Kitchen",
      author: "Christian Mackie",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/2500_hz_sine_2_seconds.wav"//"/audio/man-apologizes.mp3"
    },
    {
        id: 17,
      //  img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      img: "https://publicdomainvectors.org/tn_img/Devil_001_Head_Cartoon.webp",
      title: "Blinds",
      author: "Darren Richardson",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/Lee_Smolin_Physics_Envy_and_Economic_Theory-cWn86ESze6M_mono_1st_few_seconds.wav"//"/audio/dramatic-female.mp3"
    },
    {
        id: 18,
      //  img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      img: "https://publicdomainvectors.org/tn_img/painted_face.webp",
      title: "Chairs",
      author: "Taylor Simpson",
      voice: "https://cdn.jsdelivr.net/npm/sample-audio-files@1.0.7/media/sine_wave_32768_128.wav"//"/audio/weird-talking.mp3"
    }
  ];

export default mockUserData