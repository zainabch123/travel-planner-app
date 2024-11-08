const getTravelData = async (req, res) => {
  const searchQuery = req.query.searchQuery;
  const category = req.query.category;
  const tripAdvisorApiKey = process.env.TRIPADVISOR_API_KEY;

    const backupData = [
    {
      location_id: "187497",
      name: "Barcelona",
      address_obj: {
        street2: "",
        city: "Catalonia",
        state: "Province of Barcelona",
        country: "Spain",
        address_string: "Barcelona Spain",
      },
      description:
        "Barcelona feels a bit surreal – appropriate, since Salvador Dali spent time here and Spanish Catalan architect Antoni Gaudí designed several of the city’s buildings. Stepping into Gaudí’s Church of the Sacred Family is a bit like falling through the looking glass - a journey that you can continue with a visit to Park Güell. Sip sangria at a sidewalk café in Las Ramblas while watching flamboyant street performers, then create your own moveable feast by floating from tapas bar to tapas bar.",
      category: {
        name: "geographic",
        localized_name: "Geographic",
      },
      images: [
        {
          id: 738700416,
          is_blessed: false,
          caption: "",
          published_date: "2024-05-01T17:22:34.565Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2c/07/ac/80/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2c/07/ac/80/caption.jpg",
            },
            medium: {
              height: 141,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/2c/07/ac/80/caption.jpg",
            },
            large: {
              height: 309,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2c/07/ac/80/caption.jpg",
            },
            original: {
              height: 720,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2c/07/ac/80/caption.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
        },
        {
          id: 318197318,
          is_blessed: false,
          caption: "",
          published_date: "2018-05-16T17:22:32.186Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/12/f7/4e/46/barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/12/f7/4e/46/barcelona.jpg",
            },
            medium: {
              height: 164,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/12/f7/4e/46/barcelona.jpg",
            },
            large: {
              height: 360,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/12/f7/4e/46/barcelona.jpg",
            },
            original: {
              height: 2902,
              width: 4435,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/12/f7/4e/46/barcelona.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
        },
        {
          id: 501051306,
          is_blessed: false,
          caption: "Restaurante YuanLaosi especialista en hotpot",
          published_date: "2021-09-13T10:58:38.028Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
            },
            medium: {
              height: 200,
              width: 180,
              url: "https://media-cdn.tripadvisor.com/media/photo-i/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
            },
            large: {
              height: 450,
              width: 338,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
            },
            original: {
              height: 1365,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 501051313,
          is_blessed: false,
          caption: "Restaurante YuanLaosi especialista en hotpot",
          published_date: "2021-09-13T10:58:07.476Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
            },
            medium: {
              height: 200,
              width: 180,
              url: "https://media-cdn.tripadvisor.com/media/photo-i/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
            },
            large: {
              height: 450,
              width: 338,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
            },
            original: {
              height: 1365,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 422277506,
          is_blessed: false,
          caption:
            "Poke del mes dd septiembre. Tartar Poke (poke de edición limitada)",
          published_date: "2019-09-09T15:21:02.704Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
            },
            medium: {
              height: 191,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
            },
            large: {
              height: 421,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
            },
            original: {
              height: 979,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "19092478",
      name: "Seventy Barcelona",
      address_obj: {
        street1: "Carrer Corsega 344-352",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08037",
        address_string: "Carrer Corsega 344-352, 08037 Barcelona Spain",
      },
      description:
        "Hotel Seventy Barcelona is located between the elegance of Passeig de Gràcia, with its luxury boutiques, and the cosmopolitan customs of the artistic neighborhood of Gràcia, with its signature restaurants and local designer boutiques. It also offers two different visions of Barcelona thanks to its perfect location between Gràcia and the Eixample, orderly, rational and full of architectural gems. The hotel offers the opportunity to walk to the most interesting places in Barcelona, such as the Sagrada Familia, La Pedrera, Casa Batllò or Plaça Catalunya. Seventy Barcelona is equipped to the smallest detail with a wide range of services in each of the rooms. Among which the two Duplex Suites stand out, offering maximum exclusivity and comfort with their two atmospheres; and the Lounge Terrace Rooms, perfect for taking the air in their spacious and sunny private terraces. It also has a wide range of services and amenities to satisfy guests, such as online check-in, 24-hour reception, room service, laundry service, access and adapted spaces, fitness room, business center and luggage room. Seventy Barcelona include several areas dedicated to gastronomy - natural and healthy recipes of Mediterranean cuisine; a typical Eixample patio for breakfast or lunch surrounded by olive trees; and the Urban Beach Club located on the rooftop of the building (7th floor), a terrace with a swimming pool, solarium and restaurant exclusively for guests. The hotel also has a gym and an Organic & Vegan Spa; several independent spaces to organize all kinds of events; and the 24-hour parking, with direct access to the hotel. Enjoy your stay in Barcelona!",
      rating: "5.0",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 456832970,
          is_blessed: false,
          caption: "The White Hall",
          published_date: "2020-04-02T16:46:06.068Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/3a/b7/ca/the-white-hall.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/3a/b7/ca/the-white-hall.jpg",
            },
            medium: {
              height: 179,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/3a/b7/ca/the-white-hall.jpg",
            },
            large: {
              height: 394,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/3a/b7/ca/the-white-hall.jpg",
            },
            original: {
              height: 917,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/3a/b7/ca/the-white-hall.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 427343641,
          is_blessed: false,
          caption: "The Cors - Seventy Barcelona",
          published_date: "2019-10-03T08:24:33.785Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bf/19/the-cors-seventy-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bf/19/the-cors-seventy-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bf/19/the-cors-seventy-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bf/19/the-cors-seventy-barcelona.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bf/19/the-cors-seventy-barcelona.jpg",
            },
          },
          album: "Family/Play Areas",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 427343661,
          is_blessed: false,
          caption: "The Cors - Seventy Barcelona",
          published_date: "2019-10-03T08:24:44.987Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
            },
            original: {
              height: 854,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
            },
          },
          album: "Family/Play Areas",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 427342961,
          is_blessed: false,
          caption: "Seventy Spa",
          published_date: "2019-10-03T08:18:52.842Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bc/71/seventy-spa.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bc/71/seventy-spa.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bc/71/seventy-spa.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bc/71/seventy-spa.jpg",
            },
            original: {
              height: 854,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bc/71/seventy-spa.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 427342378,
          is_blessed: false,
          caption: "",
          published_date: "2019-10-03T08:13:49.211Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/ba/2a/seventy-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/ba/2a/seventy-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/ba/2a/seventy-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/ba/2a/seventy-barcelona.jpg",
            },
            original: {
              height: 854,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/ba/2a/seventy-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "7142609",
      name: "Serras Barcelona",
      address_obj: {
        street1: "Passeig De Colom, 9",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08002",
        address_string: "Passeig De Colom, 9, 08002 Barcelona Spain",
      },
      description:
        "This luxury boutique hotel comprises 28 trendy and very spacious rooms and suites, a Michelin star Chef Restaurant and a chill out rooftop terrace. This elegant 5-star boutique hotel overlooking the new luxury Port Vell alongside the Mediterranean Sea, offers a unique hideaway with a modern understated decor. Ideal for your weekend breaks, business trips and luxury holidays in the heart of Barcelona. It boasts a cool, trendy atmosphere, world class amenities and dedicated personal service for a truly memorable hotel experience in the first studio of Pablo Picasso on vibrant Barrio Gotico. Restaurant Informal Our Michelin Star Chef invites you to experience his Catalan specialties in a delicious selection of Mediterranean tapas, prepared from fresh seasonal ingredients sourced from our local market. Rooftop Terrace Offering breathtaking views of the Mediterranean Sea and the new Marina of Port Vell, our stylish rooftop terrace comes beautifully appointed with a superb infinity pool and comfortable lounge area.",
      rating: "5.0",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 748748684,
          is_blessed: false,
          caption: "Facade Serras Barcelona",
          published_date: "2024-06-21T21:15:15.208Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2c/a0/ff/8c/facade-serras-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2c/a0/ff/8c/facade-serras-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/2c/a0/ff/8c/facade-serras-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2c/a0/ff/8c/facade-serras-barcelona.jpg",
            },
            original: {
              height: 683,
              width: 1023,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/2c/a0/ff/8c/facade-serras-barcelona.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
        },
        {
          id: 288605156,
          is_blessed: false,
          caption: "Junior Suite",
          published_date: "2017-11-07T11:39:02.393Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/11/33/c3/e4/junior-suite.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/11/33/c3/e4/junior-suite.jpg",
            },
            medium: {
              height: 147,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/11/33/c3/e4/junior-suite.jpg",
            },
            large: {
              height: 323,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/11/33/c3/e4/junior-suite.jpg",
            },
            original: {
              height: 1163,
              width: 1981,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/11/33/c3/e4/junior-suite.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 116117531,
          is_blessed: false,
          caption: "King size bed with Hypnos Mattress",
          published_date: "2014-11-19T16:30:28.369Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/06/eb/d0/1b/the-serras-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/06/eb/d0/1b/the-serras-barcelona.jpg",
            },
            medium: {
              height: 179,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/06/eb/d0/1b/the-serras-barcelona.jpg",
            },
            large: {
              height: 394,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/06/eb/d0/1b/the-serras-barcelona.jpg",
            },
            original: {
              height: 1344,
              width: 1875,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/06/eb/d0/1b/the-serras-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 116118321,
          is_blessed: false,
          caption: "Junior Suite The Serras",
          published_date: "2014-11-19T16:41:22.343Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/06/eb/d3/31/the-serras-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/06/eb/d3/31/the-serras-barcelona.jpg",
            },
            medium: {
              height: 147,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/06/eb/d3/31/the-serras-barcelona.jpg",
            },
            large: {
              height: 323,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/06/eb/d3/31/the-serras-barcelona.jpg",
            },
            original: {
              height: 1163,
              width: 1981,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/06/eb/d3/31/the-serras-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 123008604,
          is_blessed: false,
          caption: "Executive Chef Marc Gascons",
          published_date: "2015-02-12T19:14:03.993Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/07/54/f6/5c/hotel-the-serras.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/07/54/f6/5c/hotel-the-serras.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/07/54/f6/5c/hotel-the-serras.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/07/54/f6/5c/hotel-the-serras.jpg",
            },
            original: {
              height: 1333,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/07/54/f6/5c/hotel-the-serras.jpg",
            },
          },
          album: "Dining    ",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "1465497",
      name: "W Barcelona",
      address_obj: {
        street1: "Placa Rosa del Vents 1",
        street2: "Final Passeig De Joan De Borbó",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08039",
        address_string:
          "Placa Rosa del Vents 1 Final Passeig De Joan De Borbó, 08039 Barcelona Spain",
      },
      description:
        "Step inside. See for yourself. Designed by world-renowned architect Ricardo Bofill, W Barcelona sets the scene for a spectacular stay. W Barcelona offers a combination of luxury and comfort in each of its 473 fabulous guestrooms and suites. This 5-star hotel is located on the beachfront along the famous Barceloneta Boardwalk. Each guestroom and suite provides panoramic views over the Mediterranean Sea and the city of Barcelona.",
      rating: "4.0",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 29354430,
          is_blessed: false,
          caption: "W Barcelona",
          published_date: "2011-01-13T14:11:12.79Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/01/bf/e9/be/w-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/01/bf/e9/be/w-barcelona.jpg",
            },
            medium: {
              height: 195,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/01/bf/e9/be/w-barcelona.jpg",
            },
            large: {
              height: 431,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/01/bf/e9/be/w-barcelona.jpg",
            },
            original: {
              height: 1176,
              width: 1500,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/01/bf/e9/be/w-barcelona.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 143652804,
          is_blessed: false,
          caption: "SUN Deck",
          published_date: "2015-08-06T07:23:21.288Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/08/8f/f7/c4/w-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/08/8f/f7/c4/w-barcelona.jpg",
            },
            medium: {
              height: 188,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/08/8f/f7/c4/w-barcelona.jpg",
            },
            large: {
              height: 413,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/08/8f/f7/c4/w-barcelona.jpg",
            },
            original: {
              height: 1500,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/08/8f/f7/c4/w-barcelona.jpg",
            },
          },
          album: "Pool/Beach Area",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 269280983,
          is_blessed: false,
          caption: "Cozy Room",
          published_date: "2017-07-28T10:25:19.95Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/e6/d7/cozy-room.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/e6/d7/cozy-room.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/e6/d7/cozy-room.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/e6/d7/cozy-room.jpg",
            },
            original: {
              height: 1333,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/e6/d7/cozy-room.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 269276963,
          is_blessed: false,
          caption: "",
          published_date: "2017-07-28T09:52:25.966Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/d7/23/w-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/d7/23/w-barcelona.jpg",
            },
            medium: {
              height: 141,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/d7/23/w-barcelona.jpg",
            },
            large: {
              height: 309,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/d7/23/w-barcelona.jpg",
            },
            original: {
              height: 900,
              width: 1600,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/d7/23/w-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 269280241,
          is_blessed: false,
          caption: "Spectacular Suite",
          published_date: "2017-07-28T10:19:43.007Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/e3/f1/spectacular-suite.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/e3/f1/spectacular-suite.jpg",
            },
            medium: {
              height: 188,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/e3/f1/spectacular-suite.jpg",
            },
            large: {
              height: 413,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/e3/f1/spectacular-suite.jpg",
            },
            original: {
              height: 1500,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/e3/f1/spectacular-suite.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "191048",
      name: "Barcelona Cathedral",
      address_obj: {
        street1: "Pla de la Seu, S/N",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08002",
        address_string: "Pla de la Seu, S/N, 08002 Barcelona Spain",
      },
      description:
        "A beautiful gothic cathedral with stained glass windows dating back 500 years.",
      rating: "4.5",
      category: {
        name: "attraction",
        localized_name: "Attraction",
      },
      images: [
        {
          id: 378287913,
          is_blessed: false,
          caption: "",
          published_date: "2019-02-21T20:35:19.927Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/16/8c/37/29/photo1jpg.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/16/8c/37/29/photo1jpg.jpg",
            },
            medium: {
              height: 188,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/16/8c/37/29/photo1jpg.jpg",
            },
            large: {
              height: 413,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/16/8c/37/29/photo1jpg.jpg",
            },
            original: {
              height: 960,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/8c/37/29/photo1jpg.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
          user: {
            username: "kanemochi",
          },
        },
        {
          id: 765487439,
          is_blessed: false,
          caption: "",
          published_date: "2024-09-25T23:31:16.147Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4f/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4f/caption.jpg",
            },
            medium: {
              height: 188,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/2d/a0/69/4f/caption.jpg",
            },
            large: {
              height: 412,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4f/caption.jpg",
            },
            original: {
              height: 960,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/a0/69/4f/caption.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
          user: {
            username: "erikamanza",
          },
        },
        {
          id: 765487434,
          is_blessed: false,
          caption: "",
          published_date: "2024-09-25T23:31:16.142Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4a/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4a/caption.jpg",
            },
            medium: {
              height: 200,
              width: 180,
              url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/4a/caption.jpg",
            },
            large: {
              height: 450,
              width: 338,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4a/caption.jpg",
            },
            original: {
              height: 1365,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/4a/caption.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
          user: {
            username: "erikamanza",
          },
        },
        {
          id: 765487429,
          is_blessed: false,
          caption: "",
          published_date: "2024-09-25T23:31:16.141Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/45/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/45/caption.jpg",
            },
            medium: {
              height: 200,
              width: 180,
              url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/45/caption.jpg",
            },
            large: {
              height: 450,
              width: 338,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/45/caption.jpg",
            },
            original: {
              height: 1365,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/45/caption.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
          user: {
            username: "erikamanza",
          },
        },
        {
          id: 765487438,
          is_blessed: false,
          caption: "",
          published_date: "2024-09-25T23:31:16.14Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4e/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4e/caption.jpg",
            },
            medium: {
              height: 200,
              width: 180,
              url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/4e/caption.jpg",
            },
            large: {
              height: 450,
              width: 338,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4e/caption.jpg",
            },
            original: {
              height: 1365,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/4e/caption.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Traveler",
            localized_name: "Traveler",
          },
          user: {
            username: "erikamanza",
          },
        },
      ],
    },
    {
      location_id: "12941693",
      name: "Almanac Barcelona",
      address_obj: {
        street1: "Gran Via de Les Corts Catalanes 619-621",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08007",
        address_string:
          "Gran Via de Les Corts Catalanes 619-621, 08007 Barcelona Spain",
      },
      description:
        "Awaken your senses to a new kind of hospitality experience and unlock the essence of Almanac. Located on Gran Via de les Corts Catalanes 619-621, the new hotel features 91 luxurious accommodations. In a prime location, the hotel is steps from Passeig de Gràcia, where guests can find stylish shopping, restaurants, bars and museums. For architecture lovers, the Avenue is home to some of the city’s most important Modernist buildings. Yet, just below the city center you can be on the seaside in Barceloneta enjoying the beach and cafés. Barcelona sizzles with bold creativity. If you wish to be where the cultural junction meets the urban landscape, then Almanac Barcelona is the perfect choice.",
      rating: "4.5",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 757303977,
          is_blessed: false,
          caption: "",
          published_date: "2024-08-13T14:51:59.52Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/23/8a/a9/caption.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/23/8a/a9/caption.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/2d/23/8a/a9/caption.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/23/8a/a9/caption.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/23/8a/a9/caption.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 303154228,
          is_blessed: false,
          caption: "Pool area in rooftop",
          published_date: "2018-02-16T14:30:33.114Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/12/11/c4/34/almanac-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/12/11/c4/34/almanac-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/12/11/c4/34/almanac-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/12/11/c4/34/almanac-barcelona.jpg",
            },
            original: {
              height: 1335,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/12/11/c4/34/almanac-barcelona.jpg",
            },
          },
          album: "Pool/Beach Area",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 415415546,
          is_blessed: false,
          caption:
            "Penthouse Suite - living area\n\nhttps://my.matterport.com/show/?m=gfgTFfPLph4",
          published_date: "2019-08-13T09:45:02.35Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/18/c2/bc/fa/almanac-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/18/c2/bc/fa/almanac-barcelona.jpg",
            },
            medium: {
              height: 160,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/18/c2/bc/fa/almanac-barcelona.jpg",
            },
            large: {
              height: 353,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/18/c2/bc/fa/almanac-barcelona.jpg",
            },
            original: {
              height: 822,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/c2/bc/fa/almanac-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 303154198,
          is_blessed: false,
          caption: "Junior Suite - bedroom",
          published_date: "2018-02-16T14:30:12.067Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/12/11/c4/16/almanac-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/12/11/c4/16/almanac-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/12/11/c4/16/almanac-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/12/11/c4/16/almanac-barcelona.jpg",
            },
            original: {
              height: 1335,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/12/11/c4/16/almanac-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 704375017,
          is_blessed: false,
          caption: "",
          published_date: "2023-08-08T09:37:55.504Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/29/fb/e8/e9/almanac-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/29/fb/e8/e9/almanac-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/29/fb/e8/e9/almanac-barcelona.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/29/fb/e8/e9/almanac-barcelona.jpg",
            },
            original: {
              height: 855,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/29/fb/e8/e9/almanac-barcelona.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "7365281",
      name: "In Out Barcelona Tours",
      address_obj: {
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        address_string: "Barcelona Spain",
      },
      description:
        "In Out Barcelona Tours runs tours in and out Barcelona. Not only will we take you to Barcelona's main attractions, but also to unknown treasures all around catalunya, such as: Girona, Costa Brava, Dali's Museum, Penedes, Sitges and Tarragona",
      rating: "5.0",
      category: {
        name: "attraction",
        localized_name: "Attraction",
      },
      images: [
        {
          id: 462429166,
          is_blessed: false,
          caption: "A small group tour of Montserrat",
          published_date: "2020-07-16T10:45:17.875Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1b/ee/a-small-group-tour-of.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1b/ee/a-small-group-tour-of.jpg",
            },
            medium: {
              height: 140,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1b/ee/a-small-group-tour-of.jpg",
            },
            large: {
              height: 309,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1b/ee/a-small-group-tour-of.jpg",
            },
            original: {
              height: 719,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1b/ee/a-small-group-tour-of.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 119640839,
          is_blessed: false,
          caption: "Montserrat guided Tour, In Out Barcelona Tours",
          published_date: "2015-01-14T07:49:13.74Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/07/21/93/07/in-out-barcelona-tours.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/07/21/93/07/in-out-barcelona-tours.jpg",
            },
            medium: {
              height: 160,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/07/21/93/07/in-out-barcelona-tours.jpg",
            },
            large: {
              height: 353,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/07/21/93/07/in-out-barcelona-tours.jpg",
            },
            original: {
              height: 450,
              width: 700,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/07/21/93/07/in-out-barcelona-tours.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 119640818,
          is_blessed: false,
          caption:
            "Guided tour at modernism architecture in barcelona, In Out Barcelona Tours",
          published_date: "2015-01-14T07:49:12.707Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/07/21/92/f2/in-out-barcelona-tours.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/07/21/92/f2/in-out-barcelona-tours.jpg",
            },
            medium: {
              height: 106,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/07/21/92/f2/in-out-barcelona-tours.jpg",
            },
            large: {
              height: 232,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/07/21/92/f2/in-out-barcelona-tours.jpg",
            },
            original: {
              height: 550,
              width: 1300,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/07/21/92/f2/in-out-barcelona-tours.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 462429232,
          is_blessed: false,
          caption: "Two of our guides next to one of our vans",
          published_date: "2020-07-16T10:45:44.355Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1c/30/two-of-our-guides-next.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1c/30/two-of-our-guides-next.jpg",
            },
            medium: {
              height: 141,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1c/30/two-of-our-guides-next.jpg",
            },
            large: {
              height: 309,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1c/30/two-of-our-guides-next.jpg",
            },
            original: {
              height: 720,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1c/30/two-of-our-guides-next.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 462429224,
          is_blessed: false,
          caption: "A small group tour and the van used during the tours",
          published_date: "2020-07-16T10:45:43.415Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1c/28/a-small-group-tour-and.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1c/28/a-small-group-tour-and.jpg",
            },
            medium: {
              height: 141,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1c/28/a-small-group-tour-and.jpg",
            },
            large: {
              height: 309,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1c/28/a-small-group-tour-and.jpg",
            },
            original: {
              height: 720,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1c/28/a-small-group-tour-and.jpg",
            },
          },
          album: "Other",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "23425371",
      name: "ME Barcelona",
      address_obj: {
        street1: "Carrer Casp 1-13",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08010",
        address_string: "Carrer Casp 1-13, 08010 Barcelona Spain",
      },
      description:
        "Located in the heart of Barcelona, near Passeig de Gràcia, this hotel is regarded as a cultural hotspot where you can find art, design, fashion and music. It is a source of inspiration and creativity for all its visitors. It boasts rooms and suites featuring an urban style, and restaurants offering Mediterranean cuisine, along with tempting cocktails. Furthermore, it also features a rooftop swimming pool, a spa, a fully equipped gym, an urban garden, a Rooftop Bar and over 600 m2 of versatile spaces. Pets allowed (extra charge).",
      rating: "5.0",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 565920146,
          is_blessed: false,
          caption: "Rooftop Pool",
          published_date: "2021-12-29T10:50:23.896Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/41/92/rooftop-pool.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/41/92/rooftop-pool.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/41/92/rooftop-pool.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/41/92/rooftop-pool.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/41/92/rooftop-pool.jpg",
            },
          },
          album: "Pool/Beach Area",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 565920865,
          is_blessed: false,
          caption: "Studio ME+ Suite",
          published_date: "2021-12-29T11:04:45.12Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/44/61/studio-me-suite.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/44/61/studio-me-suite.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/44/61/studio-me-suite.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/44/61/studio-me-suite.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/44/61/studio-me-suite.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 565920465,
          is_blessed: false,
          caption: "ME welcomes YOU - ME Barcelona.",
          published_date: "2021-12-29T10:54:37.08Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/42/d1/me-welcomes-you.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/42/d1/me-welcomes-you.jpg",
            },
            medium: {
              height: 153,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/42/d1/me-welcomes-you.jpg",
            },
            large: {
              height: 336,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/42/d1/me-welcomes-you.jpg",
            },
            original: {
              height: 782,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/42/d1/me-welcomes-you.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 565920477,
          is_blessed: false,
          caption: "TERRENAL Restaurant - ME Barcelona.",
          published_date: "2021-12-29T10:54:52.907Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/42/dd/terrenal.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/42/dd/terrenal.jpg",
            },
            medium: {
              height: 165,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/42/dd/terrenal.jpg",
            },
            large: {
              height: 363,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/42/dd/terrenal.jpg",
            },
            original: {
              height: 846,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/42/dd/terrenal.jpg",
            },
          },
          album: "Dining    ",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 565920886,
          is_blessed: false,
          caption: "Standard Room - ME Barcelona.",
          published_date: "2021-12-29T11:05:09.526Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/44/76/standard-room.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/44/76/standard-room.jpg",
            },
            medium: {
              height: 166,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/44/76/standard-room.jpg",
            },
            large: {
              height: 366,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/44/76/standard-room.jpg",
            },
            original: {
              height: 851,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/44/76/standard-room.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "1940950",
      name: "Hotel Ohla Barcelona",
      address_obj: {
        street1: "Via Laietana 49",
        street2: "Ciutat Vella",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08003",
        address_string: "Via Laietana 49 Ciutat Vella, 08003 Barcelona Spain",
      },
      description:
        "Ohla Barcelona Hotel is a five-star boutique hotel located in the historical center of the city Barcelona, surrounded by three of the city's most popular sight-seeing and shopping areas: the Gothic Quarter, the Born and the Eixample. Inaugurated in February 2011, its location is perfect for tourism, shopping or business, with a fusion of calm serenity and the bustle of downtown Barcelona. The project has left untouched the building's historical facade from 1920 and other listed elements, including the main staircase, while giving the establishment a cutting-edge, minimalist interior design that combines various textures of black, white and oak wood. The building stands out for the sculpture on the facade by world-renowned artist, Frederic Amat. The hotel has 74 rooms, all equipped with a 40-inch TV screen and satellite channels, free Wi-Fi, telephone, safe box with room for a 17-inch laptop, adjustable lighting, individual thermostat, Egyptian cotton sheets, robe, slippers, kettle and minibar. Its culinary spaces are one of the highlights of the hotel, which locals consider great meeting points: Caelis restaurant, awarded with a Michelin star; La Plassohla, 'tapas' and small plates and Vistro 49, a boutique bar specialized in wines and cocktails. The terrace and the enclosed pool, the only one of its kind in Barcelona, have been called one of the best places to relax and enjoy a spectacular view of the city. Meeting rooms, gym, sauna and massage room, internet corner and parking garage are just some of the other services the department of Public Relations can offer to even further personalize each guest's stay and ensure it is an unforgettable experience. In short, a world of experiences that the whole Ohla Barcelona team offers guests looking for a hotel with charm and personality in the center of Barcelona.",
      rating: "4.5",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 720226784,
          is_blessed: false,
          caption: "Exterior View",
          published_date: "2023-12-02T01:12:35.079Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/2a/ed/c9/e0/exterior-view.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/2a/ed/c9/e0/exterior-view.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/2a/ed/c9/e0/exterior-view.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/2a/ed/c9/e0/exterior-view.jpg",
            },
            original: {
              height: 683,
              width: 1024,
              url: "https://media-cdn.tripadvisor.com/media/photo-w/2a/ed/c9/e0/exterior-view.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
        },
        {
          id: 64515307,
          is_blessed: false,
          caption: "Ohla Terraza",
          published_date: "2013-05-02T12:11:07.398Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/03/d8/6c/eb/ohla-hotel.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/03/d8/6c/eb/ohla-hotel.jpg",
            },
            medium: {
              height: 145,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/03/d8/6c/eb/ohla-hotel.jpg",
            },
            large: {
              height: 320,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/03/d8/6c/eb/ohla-hotel.jpg",
            },
            original: {
              height: 1167,
              width: 2000,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/03/d8/6c/eb/ohla-hotel.jpg",
            },
          },
          album: "Pool/Beach Area",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 64515992,
          is_blessed: false,
          caption: "Ohla Terraza",
          published_date: "2013-05-02T12:23:12.256Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/03/d8/6f/98/ohla-hotel.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/03/d8/6f/98/ohla-hotel.jpg",
            },
            medium: {
              height: 150,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/03/d8/6f/98/ohla-hotel.jpg",
            },
            large: {
              height: 330,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/03/d8/6f/98/ohla-hotel.jpg",
            },
            original: {
              height: 768,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/03/d8/6f/98/ohla-hotel.jpg",
            },
          },
          album: "Pool/Beach Area",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 461817623,
          is_blessed: false,
          caption: "Caelis Privé",
          published_date: "2020-07-10T09:12:46.677Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/86/c7/17/caelis-prive.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/86/c7/17/caelis-prive.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/86/c7/17/caelis-prive.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/86/c7/17/caelis-prive.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/86/c7/17/caelis-prive.jpg",
            },
          },
          album: "Business Center/Function Rooms",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 409685588,
          is_blessed: false,
          caption: "",
          published_date: "2019-07-22T10:16:21.334Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/18/6b/4e/54/hotel-ohla-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/18/6b/4e/54/hotel-ohla-barcelona.jpg",
            },
            medium: {
              height: 150,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/18/6b/4e/54/hotel-ohla-barcelona.jpg",
            },
            large: {
              height: 330,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/18/6b/4e/54/hotel-ohla-barcelona.jpg",
            },
            original: {
              height: 768,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/18/6b/4e/54/hotel-ohla-barcelona.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
    {
      location_id: "190616",
      name: "Majestic Hotel & Spa Barcelona",
      address_obj: {
        street1: "Paseo de Gracia, 68 - 70",
        city: "Barcelona",
        state: "Province of Barcelona",
        country: "Spain",
        postalcode: "08007",
        address_string: "Paseo de Gracia, 68 - 70, 08007 Barcelona Spain",
      },
      description:
        "Deluxe 5-star traditional hotel in the real heart of Barcelona, few steps away from Gaudi monuments and famous Rambla. Entirely renovated, it offers excellence in service for the most demanding travelers. Rooftop terrace with panoramic view and outdoor pool.",
      rating: "4.5",
      category: {
        name: "hotel",
        localized_name: "Hotel",
      },
      images: [
        {
          id: 686784822,
          is_blessed: false,
          caption:
            "Sunset at Passeig de Gràcia - Majestic Hotel & Spa Barcelona 5* GL",
          published_date: "2023-04-27T14:00:11.451Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/28/ef/81/36/sunset-at-passeig-de.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/28/ef/81/36/sunset-at-passeig-de.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/28/ef/81/36/sunset-at-passeig-de.jpg",
            },
            large: {
              height: 367,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/28/ef/81/36/sunset-at-passeig-de.jpg",
            },
            original: {
              height: 695,
              width: 1042,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/28/ef/81/36/sunset-at-passeig-de.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 133601474,
          is_blessed: false,
          caption: "Detalle de Fachada - Majestic Hotel & Spa Barcelona 5* GL",
          published_date: "2015-05-25T14:23:23.713Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
            },
            medium: {
              height: 166,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
            },
            large: {
              height: 364,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
            },
            original: {
              height: 596,
              width: 900,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
            },
          },
          album: "Hotel & Grounds",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 94440074,
          is_blessed: false,
          caption:
            "Suites with Views of Passeig de Gracia - Majestic Hotel & Spa Barcelona 5* GL",
          published_date: "2014-03-25T16:27:22.536Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
            },
            medium: {
              height: 166,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
            },
            large: {
              height: 366,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 133601909,
          is_blessed: false,
          caption:
            "Penthouse Sagrada Familia - Majestic Hotel & Spa Barcelona 5* GL",
          published_date: "2015-05-25T14:26:56.279Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
            },
            medium: {
              height: 167,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
            },
            large: {
              height: 366,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
            },
            original: {
              height: 600,
              width: 900,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
        {
          id: 94439968,
          is_blessed: false,
          caption:
            "Suites con vistas de Paseo de Gracia - Majestic Hotel & Spa Barcelona 5* GL",
          published_date: "2014-03-25T16:24:58.717Z",
          images: {
            thumbnail: {
              height: 50,
              width: 50,
              url: "https://media-cdn.tripadvisor.com/media/photo-t/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
            },
            small: {
              height: 150,
              width: 150,
              url: "https://media-cdn.tripadvisor.com/media/photo-l/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
            },
            medium: {
              height: 166,
              width: 250,
              url: "https://media-cdn.tripadvisor.com/media/photo-f/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
            },
            large: {
              height: 366,
              width: 550,
              url: "https://media-cdn.tripadvisor.com/media/photo-s/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
            },
            original: {
              height: 853,
              width: 1280,
              url: "https://media-cdn.tripadvisor.com/media/photo-o/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
            },
          },
          album: "Room/Suite",
          source: {
            name: "Management",
            localized_name: "Management",
          },
          user: {
            username: "Management",
          },
        },
      ],
    },
  ];


  try {
    const locationsResponse = await fetch(
      `https://api.content.tripadvisor.com/api/v1/location/search?${tripAdvisorApiKey}&language=en&searchQuery=${searchQuery}&category=${category}`,
      {
        method: "GET",
        headers: {
          Referer: "https://travel-planner-app-backend.vercel.app/",
        },
      }
    );
    const data = await locationsResponse.json();

    if (data.Message) {
      throw new Error(data.Message);
    }


    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      error: false,
      data: backupData,
      message: "An error occurred while fetching travel data.",
    });
  }
};

// const getTravelData = async (req, res) => {
//   const searchQuery = req.query.searchQuery;
//   const category = req.query.category;
//   const tripAdvisorApiKey = process.env.TRIPADVISOR_API_KEY;

//   const backupData = [
//     {
//       location_id: "187497",
//       name: "Barcelona",
//       address_obj: {
//         street2: "",
//         city: "Catalonia",
//         state: "Province of Barcelona",
//         country: "Spain",
//         address_string: "Barcelona Spain",
//       },
//       description:
//         "Barcelona feels a bit surreal – appropriate, since Salvador Dali spent time here and Spanish Catalan architect Antoni Gaudí designed several of the city’s buildings. Stepping into Gaudí’s Church of the Sacred Family is a bit like falling through the looking glass - a journey that you can continue with a visit to Park Güell. Sip sangria at a sidewalk café in Las Ramblas while watching flamboyant street performers, then create your own moveable feast by floating from tapas bar to tapas bar.",
//       category: {
//         name: "geographic",
//         localized_name: "Geographic",
//       },
//       images: [
//         {
//           id: 738700416,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-05-01T17:22:34.565Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2c/07/ac/80/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2c/07/ac/80/caption.jpg",
//             },
//             medium: {
//               height: 141,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/2c/07/ac/80/caption.jpg",
//             },
//             large: {
//               height: 309,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2c/07/ac/80/caption.jpg",
//             },
//             original: {
//               height: 720,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2c/07/ac/80/caption.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//         },
//         {
//           id: 318197318,
//           is_blessed: false,
//           caption: "",
//           published_date: "2018-05-16T17:22:32.186Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/12/f7/4e/46/barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/12/f7/4e/46/barcelona.jpg",
//             },
//             medium: {
//               height: 164,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/12/f7/4e/46/barcelona.jpg",
//             },
//             large: {
//               height: 360,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/12/f7/4e/46/barcelona.jpg",
//             },
//             original: {
//               height: 2902,
//               width: 4435,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/12/f7/4e/46/barcelona.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//         },
//         {
//           id: 501051306,
//           is_blessed: false,
//           caption: "Restaurante YuanLaosi especialista en hotpot",
//           published_date: "2021-09-13T10:58:38.028Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
//             },
//             medium: {
//               height: 200,
//               width: 180,
//               url: "https://media-cdn.tripadvisor.com/media/photo-i/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
//             },
//             large: {
//               height: 450,
//               width: 338,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
//             },
//             original: {
//               height: 1365,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/dd/6f/aa/restaurante-yuanlaosi.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 501051313,
//           is_blessed: false,
//           caption: "Restaurante YuanLaosi especialista en hotpot",
//           published_date: "2021-09-13T10:58:07.476Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
//             },
//             medium: {
//               height: 200,
//               width: 180,
//               url: "https://media-cdn.tripadvisor.com/media/photo-i/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
//             },
//             large: {
//               height: 450,
//               width: 338,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
//             },
//             original: {
//               height: 1365,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/1d/dd/6f/b1/restaurante-yuanlaosi.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 422277506,
//           is_blessed: false,
//           caption:
//             "Poke del mes dd septiembre. Tartar Poke (poke de edición limitada)",
//           published_date: "2019-09-09T15:21:02.704Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
//             },
//             medium: {
//               height: 191,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
//             },
//             large: {
//               height: 421,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
//             },
//             original: {
//               height: 979,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/2b/71/82/poke-del-mes-dd-septiembre.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "19092478",
//       name: "Seventy Barcelona",
//       address_obj: {
//         street1: "Carrer Corsega 344-352",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08037",
//         address_string: "Carrer Corsega 344-352, 08037 Barcelona Spain",
//       },
//       description:
//         "Hotel Seventy Barcelona is located between the elegance of Passeig de Gràcia, with its luxury boutiques, and the cosmopolitan customs of the artistic neighborhood of Gràcia, with its signature restaurants and local designer boutiques. It also offers two different visions of Barcelona thanks to its perfect location between Gràcia and the Eixample, orderly, rational and full of architectural gems. The hotel offers the opportunity to walk to the most interesting places in Barcelona, such as the Sagrada Familia, La Pedrera, Casa Batllò or Plaça Catalunya. Seventy Barcelona is equipped to the smallest detail with a wide range of services in each of the rooms. Among which the two Duplex Suites stand out, offering maximum exclusivity and comfort with their two atmospheres; and the Lounge Terrace Rooms, perfect for taking the air in their spacious and sunny private terraces. It also has a wide range of services and amenities to satisfy guests, such as online check-in, 24-hour reception, room service, laundry service, access and adapted spaces, fitness room, business center and luggage room. Seventy Barcelona include several areas dedicated to gastronomy - natural and healthy recipes of Mediterranean cuisine; a typical Eixample patio for breakfast or lunch surrounded by olive trees; and the Urban Beach Club located on the rooftop of the building (7th floor), a terrace with a swimming pool, solarium and restaurant exclusively for guests. The hotel also has a gym and an Organic & Vegan Spa; several independent spaces to organize all kinds of events; and the 24-hour parking, with direct access to the hotel. Enjoy your stay in Barcelona!",
//       rating: "5.0",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 456832970,
//           is_blessed: false,
//           caption: "The White Hall",
//           published_date: "2020-04-02T16:46:06.068Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/3a/b7/ca/the-white-hall.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/3a/b7/ca/the-white-hall.jpg",
//             },
//             medium: {
//               height: 179,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/3a/b7/ca/the-white-hall.jpg",
//             },
//             large: {
//               height: 394,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/3a/b7/ca/the-white-hall.jpg",
//             },
//             original: {
//               height: 917,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/3a/b7/ca/the-white-hall.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 427343641,
//           is_blessed: false,
//           caption: "The Cors - Seventy Barcelona",
//           published_date: "2019-10-03T08:24:33.785Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bf/19/the-cors-seventy-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bf/19/the-cors-seventy-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bf/19/the-cors-seventy-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bf/19/the-cors-seventy-barcelona.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bf/19/the-cors-seventy-barcelona.jpg",
//             },
//           },
//           album: "Family/Play Areas",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 427343661,
//           is_blessed: false,
//           caption: "The Cors - Seventy Barcelona",
//           published_date: "2019-10-03T08:24:44.987Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
//             },
//             original: {
//               height: 854,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bf/2d/the-cors-seventy-barcelona.jpg",
//             },
//           },
//           album: "Family/Play Areas",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 427342961,
//           is_blessed: false,
//           caption: "Seventy Spa",
//           published_date: "2019-10-03T08:18:52.842Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/bc/71/seventy-spa.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/bc/71/seventy-spa.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/bc/71/seventy-spa.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/bc/71/seventy-spa.jpg",
//             },
//             original: {
//               height: 854,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/bc/71/seventy-spa.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 427342378,
//           is_blessed: false,
//           caption: "",
//           published_date: "2019-10-03T08:13:49.211Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/19/78/ba/2a/seventy-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/19/78/ba/2a/seventy-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/19/78/ba/2a/seventy-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/ba/2a/seventy-barcelona.jpg",
//             },
//             original: {
//               height: 854,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/78/ba/2a/seventy-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "7142609",
//       name: "Serras Barcelona",
//       address_obj: {
//         street1: "Passeig De Colom, 9",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08002",
//         address_string: "Passeig De Colom, 9, 08002 Barcelona Spain",
//       },
//       description:
//         "This luxury boutique hotel comprises 28 trendy and very spacious rooms and suites, a Michelin star Chef Restaurant and a chill out rooftop terrace. This elegant 5-star boutique hotel overlooking the new luxury Port Vell alongside the Mediterranean Sea, offers a unique hideaway with a modern understated decor. Ideal for your weekend breaks, business trips and luxury holidays in the heart of Barcelona. It boasts a cool, trendy atmosphere, world class amenities and dedicated personal service for a truly memorable hotel experience in the first studio of Pablo Picasso on vibrant Barrio Gotico. Restaurant Informal Our Michelin Star Chef invites you to experience his Catalan specialties in a delicious selection of Mediterranean tapas, prepared from fresh seasonal ingredients sourced from our local market. Rooftop Terrace Offering breathtaking views of the Mediterranean Sea and the new Marina of Port Vell, our stylish rooftop terrace comes beautifully appointed with a superb infinity pool and comfortable lounge area.",
//       rating: "5.0",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 748748684,
//           is_blessed: false,
//           caption: "Facade Serras Barcelona",
//           published_date: "2024-06-21T21:15:15.208Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2c/a0/ff/8c/facade-serras-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2c/a0/ff/8c/facade-serras-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/2c/a0/ff/8c/facade-serras-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2c/a0/ff/8c/facade-serras-barcelona.jpg",
//             },
//             original: {
//               height: 683,
//               width: 1023,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/2c/a0/ff/8c/facade-serras-barcelona.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//         },
//         {
//           id: 288605156,
//           is_blessed: false,
//           caption: "Junior Suite",
//           published_date: "2017-11-07T11:39:02.393Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/11/33/c3/e4/junior-suite.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/11/33/c3/e4/junior-suite.jpg",
//             },
//             medium: {
//               height: 147,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/11/33/c3/e4/junior-suite.jpg",
//             },
//             large: {
//               height: 323,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/11/33/c3/e4/junior-suite.jpg",
//             },
//             original: {
//               height: 1163,
//               width: 1981,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/11/33/c3/e4/junior-suite.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 116117531,
//           is_blessed: false,
//           caption: "King size bed with Hypnos Mattress",
//           published_date: "2014-11-19T16:30:28.369Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/06/eb/d0/1b/the-serras-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/06/eb/d0/1b/the-serras-barcelona.jpg",
//             },
//             medium: {
//               height: 179,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/06/eb/d0/1b/the-serras-barcelona.jpg",
//             },
//             large: {
//               height: 394,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/06/eb/d0/1b/the-serras-barcelona.jpg",
//             },
//             original: {
//               height: 1344,
//               width: 1875,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/06/eb/d0/1b/the-serras-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 116118321,
//           is_blessed: false,
//           caption: "Junior Suite The Serras",
//           published_date: "2014-11-19T16:41:22.343Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/06/eb/d3/31/the-serras-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/06/eb/d3/31/the-serras-barcelona.jpg",
//             },
//             medium: {
//               height: 147,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/06/eb/d3/31/the-serras-barcelona.jpg",
//             },
//             large: {
//               height: 323,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/06/eb/d3/31/the-serras-barcelona.jpg",
//             },
//             original: {
//               height: 1163,
//               width: 1981,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/06/eb/d3/31/the-serras-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 123008604,
//           is_blessed: false,
//           caption: "Executive Chef Marc Gascons",
//           published_date: "2015-02-12T19:14:03.993Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/07/54/f6/5c/hotel-the-serras.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/07/54/f6/5c/hotel-the-serras.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/07/54/f6/5c/hotel-the-serras.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/07/54/f6/5c/hotel-the-serras.jpg",
//             },
//             original: {
//               height: 1333,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/07/54/f6/5c/hotel-the-serras.jpg",
//             },
//           },
//           album: "Dining    ",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "1465497",
//       name: "W Barcelona",
//       address_obj: {
//         street1: "Placa Rosa del Vents 1",
//         street2: "Final Passeig De Joan De Borbó",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08039",
//         address_string:
//           "Placa Rosa del Vents 1 Final Passeig De Joan De Borbó, 08039 Barcelona Spain",
//       },
//       description:
//         "Step inside. See for yourself. Designed by world-renowned architect Ricardo Bofill, W Barcelona sets the scene for a spectacular stay. W Barcelona offers a combination of luxury and comfort in each of its 473 fabulous guestrooms and suites. This 5-star hotel is located on the beachfront along the famous Barceloneta Boardwalk. Each guestroom and suite provides panoramic views over the Mediterranean Sea and the city of Barcelona.",
//       rating: "4.0",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 29354430,
//           is_blessed: false,
//           caption: "W Barcelona",
//           published_date: "2011-01-13T14:11:12.79Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/01/bf/e9/be/w-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/01/bf/e9/be/w-barcelona.jpg",
//             },
//             medium: {
//               height: 195,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/01/bf/e9/be/w-barcelona.jpg",
//             },
//             large: {
//               height: 431,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/01/bf/e9/be/w-barcelona.jpg",
//             },
//             original: {
//               height: 1176,
//               width: 1500,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/01/bf/e9/be/w-barcelona.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 143652804,
//           is_blessed: false,
//           caption: "SUN Deck",
//           published_date: "2015-08-06T07:23:21.288Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/08/8f/f7/c4/w-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/08/8f/f7/c4/w-barcelona.jpg",
//             },
//             medium: {
//               height: 188,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/08/8f/f7/c4/w-barcelona.jpg",
//             },
//             large: {
//               height: 413,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/08/8f/f7/c4/w-barcelona.jpg",
//             },
//             original: {
//               height: 1500,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/08/8f/f7/c4/w-barcelona.jpg",
//             },
//           },
//           album: "Pool/Beach Area",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 269280983,
//           is_blessed: false,
//           caption: "Cozy Room",
//           published_date: "2017-07-28T10:25:19.95Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/e6/d7/cozy-room.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/e6/d7/cozy-room.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/e6/d7/cozy-room.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/e6/d7/cozy-room.jpg",
//             },
//             original: {
//               height: 1333,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/e6/d7/cozy-room.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 269276963,
//           is_blessed: false,
//           caption: "",
//           published_date: "2017-07-28T09:52:25.966Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/d7/23/w-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/d7/23/w-barcelona.jpg",
//             },
//             medium: {
//               height: 141,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/d7/23/w-barcelona.jpg",
//             },
//             large: {
//               height: 309,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/d7/23/w-barcelona.jpg",
//             },
//             original: {
//               height: 900,
//               width: 1600,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/d7/23/w-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 269280241,
//           is_blessed: false,
//           caption: "Spectacular Suite",
//           published_date: "2017-07-28T10:19:43.007Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/10/0c/e3/f1/spectacular-suite.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/10/0c/e3/f1/spectacular-suite.jpg",
//             },
//             medium: {
//               height: 188,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/10/0c/e3/f1/spectacular-suite.jpg",
//             },
//             large: {
//               height: 413,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/10/0c/e3/f1/spectacular-suite.jpg",
//             },
//             original: {
//               height: 1500,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/10/0c/e3/f1/spectacular-suite.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "191048",
//       name: "Barcelona Cathedral",
//       address_obj: {
//         street1: "Pla de la Seu, S/N",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08002",
//         address_string: "Pla de la Seu, S/N, 08002 Barcelona Spain",
//       },
//       description:
//         "A beautiful gothic cathedral with stained glass windows dating back 500 years.",
//       rating: "4.5",
//       category: {
//         name: "attraction",
//         localized_name: "Attraction",
//       },
//       images: [
//         {
//           id: 378287913,
//           is_blessed: false,
//           caption: "",
//           published_date: "2019-02-21T20:35:19.927Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/16/8c/37/29/photo1jpg.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/16/8c/37/29/photo1jpg.jpg",
//             },
//             medium: {
//               height: 188,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/16/8c/37/29/photo1jpg.jpg",
//             },
//             large: {
//               height: 413,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/16/8c/37/29/photo1jpg.jpg",
//             },
//             original: {
//               height: 960,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/8c/37/29/photo1jpg.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//           user: {
//             username: "kanemochi",
//           },
//         },
//         {
//           id: 765487439,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-09-25T23:31:16.147Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4f/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4f/caption.jpg",
//             },
//             medium: {
//               height: 188,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/2d/a0/69/4f/caption.jpg",
//             },
//             large: {
//               height: 412,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4f/caption.jpg",
//             },
//             original: {
//               height: 960,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/a0/69/4f/caption.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//           user: {
//             username: "erikamanza",
//           },
//         },
//         {
//           id: 765487434,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-09-25T23:31:16.142Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4a/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4a/caption.jpg",
//             },
//             medium: {
//               height: 200,
//               width: 180,
//               url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/4a/caption.jpg",
//             },
//             large: {
//               height: 450,
//               width: 338,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4a/caption.jpg",
//             },
//             original: {
//               height: 1365,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/4a/caption.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//           user: {
//             username: "erikamanza",
//           },
//         },
//         {
//           id: 765487429,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-09-25T23:31:16.141Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/45/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/45/caption.jpg",
//             },
//             medium: {
//               height: 200,
//               width: 180,
//               url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/45/caption.jpg",
//             },
//             large: {
//               height: 450,
//               width: 338,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/45/caption.jpg",
//             },
//             original: {
//               height: 1365,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/45/caption.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//           user: {
//             username: "erikamanza",
//           },
//         },
//         {
//           id: 765487438,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-09-25T23:31:16.14Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/a0/69/4e/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/a0/69/4e/caption.jpg",
//             },
//             medium: {
//               height: 200,
//               width: 180,
//               url: "https://media-cdn.tripadvisor.com/media/photo-i/2d/a0/69/4e/caption.jpg",
//             },
//             large: {
//               height: 450,
//               width: 338,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/a0/69/4e/caption.jpg",
//             },
//             original: {
//               height: 1365,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/69/4e/caption.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Traveler",
//             localized_name: "Traveler",
//           },
//           user: {
//             username: "erikamanza",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "12941693",
//       name: "Almanac Barcelona",
//       address_obj: {
//         street1: "Gran Via de Les Corts Catalanes 619-621",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08007",
//         address_string:
//           "Gran Via de Les Corts Catalanes 619-621, 08007 Barcelona Spain",
//       },
//       description:
//         "Awaken your senses to a new kind of hospitality experience and unlock the essence of Almanac. Located on Gran Via de les Corts Catalanes 619-621, the new hotel features 91 luxurious accommodations. In a prime location, the hotel is steps from Passeig de Gràcia, where guests can find stylish shopping, restaurants, bars and museums. For architecture lovers, the Avenue is home to some of the city’s most important Modernist buildings. Yet, just below the city center you can be on the seaside in Barceloneta enjoying the beach and cafés. Barcelona sizzles with bold creativity. If you wish to be where the cultural junction meets the urban landscape, then Almanac Barcelona is the perfect choice.",
//       rating: "4.5",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 757303977,
//           is_blessed: false,
//           caption: "",
//           published_date: "2024-08-13T14:51:59.52Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2d/23/8a/a9/caption.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2d/23/8a/a9/caption.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/2d/23/8a/a9/caption.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2d/23/8a/a9/caption.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/23/8a/a9/caption.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 303154228,
//           is_blessed: false,
//           caption: "Pool area in rooftop",
//           published_date: "2018-02-16T14:30:33.114Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/12/11/c4/34/almanac-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/12/11/c4/34/almanac-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/12/11/c4/34/almanac-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/12/11/c4/34/almanac-barcelona.jpg",
//             },
//             original: {
//               height: 1335,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/12/11/c4/34/almanac-barcelona.jpg",
//             },
//           },
//           album: "Pool/Beach Area",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 415415546,
//           is_blessed: false,
//           caption:
//             "Penthouse Suite - living area\n\nhttps://my.matterport.com/show/?m=gfgTFfPLph4",
//           published_date: "2019-08-13T09:45:02.35Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/18/c2/bc/fa/almanac-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/18/c2/bc/fa/almanac-barcelona.jpg",
//             },
//             medium: {
//               height: 160,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/18/c2/bc/fa/almanac-barcelona.jpg",
//             },
//             large: {
//               height: 353,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/18/c2/bc/fa/almanac-barcelona.jpg",
//             },
//             original: {
//               height: 822,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/c2/bc/fa/almanac-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 303154198,
//           is_blessed: false,
//           caption: "Junior Suite - bedroom",
//           published_date: "2018-02-16T14:30:12.067Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/12/11/c4/16/almanac-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/12/11/c4/16/almanac-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/12/11/c4/16/almanac-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/12/11/c4/16/almanac-barcelona.jpg",
//             },
//             original: {
//               height: 1335,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/12/11/c4/16/almanac-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 704375017,
//           is_blessed: false,
//           caption: "",
//           published_date: "2023-08-08T09:37:55.504Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/29/fb/e8/e9/almanac-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/29/fb/e8/e9/almanac-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/29/fb/e8/e9/almanac-barcelona.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/29/fb/e8/e9/almanac-barcelona.jpg",
//             },
//             original: {
//               height: 855,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/29/fb/e8/e9/almanac-barcelona.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "7365281",
//       name: "In Out Barcelona Tours",
//       address_obj: {
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         address_string: "Barcelona Spain",
//       },
//       description:
//         "In Out Barcelona Tours runs tours in and out Barcelona. Not only will we take you to Barcelona's main attractions, but also to unknown treasures all around catalunya, such as: Girona, Costa Brava, Dali's Museum, Penedes, Sitges and Tarragona",
//       rating: "5.0",
//       category: {
//         name: "attraction",
//         localized_name: "Attraction",
//       },
//       images: [
//         {
//           id: 462429166,
//           is_blessed: false,
//           caption: "A small group tour of Montserrat",
//           published_date: "2020-07-16T10:45:17.875Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1b/ee/a-small-group-tour-of.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1b/ee/a-small-group-tour-of.jpg",
//             },
//             medium: {
//               height: 140,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1b/ee/a-small-group-tour-of.jpg",
//             },
//             large: {
//               height: 309,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1b/ee/a-small-group-tour-of.jpg",
//             },
//             original: {
//               height: 719,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1b/ee/a-small-group-tour-of.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 119640839,
//           is_blessed: false,
//           caption: "Montserrat guided Tour, In Out Barcelona Tours",
//           published_date: "2015-01-14T07:49:13.74Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/07/21/93/07/in-out-barcelona-tours.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/07/21/93/07/in-out-barcelona-tours.jpg",
//             },
//             medium: {
//               height: 160,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/07/21/93/07/in-out-barcelona-tours.jpg",
//             },
//             large: {
//               height: 353,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/07/21/93/07/in-out-barcelona-tours.jpg",
//             },
//             original: {
//               height: 450,
//               width: 700,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/07/21/93/07/in-out-barcelona-tours.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 119640818,
//           is_blessed: false,
//           caption:
//             "Guided tour at modernism architecture in barcelona, In Out Barcelona Tours",
//           published_date: "2015-01-14T07:49:12.707Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/07/21/92/f2/in-out-barcelona-tours.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/07/21/92/f2/in-out-barcelona-tours.jpg",
//             },
//             medium: {
//               height: 106,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/07/21/92/f2/in-out-barcelona-tours.jpg",
//             },
//             large: {
//               height: 232,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/07/21/92/f2/in-out-barcelona-tours.jpg",
//             },
//             original: {
//               height: 550,
//               width: 1300,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/07/21/92/f2/in-out-barcelona-tours.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 462429232,
//           is_blessed: false,
//           caption: "Two of our guides next to one of our vans",
//           published_date: "2020-07-16T10:45:44.355Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1c/30/two-of-our-guides-next.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1c/30/two-of-our-guides-next.jpg",
//             },
//             medium: {
//               height: 141,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1c/30/two-of-our-guides-next.jpg",
//             },
//             large: {
//               height: 309,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1c/30/two-of-our-guides-next.jpg",
//             },
//             original: {
//               height: 720,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1c/30/two-of-our-guides-next.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 462429224,
//           is_blessed: false,
//           caption: "A small group tour and the van used during the tours",
//           published_date: "2020-07-16T10:45:43.415Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/90/1c/28/a-small-group-tour-and.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/90/1c/28/a-small-group-tour-and.jpg",
//             },
//             medium: {
//               height: 141,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/90/1c/28/a-small-group-tour-and.jpg",
//             },
//             large: {
//               height: 309,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/90/1c/28/a-small-group-tour-and.jpg",
//             },
//             original: {
//               height: 720,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/90/1c/28/a-small-group-tour-and.jpg",
//             },
//           },
//           album: "Other",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "23425371",
//       name: "ME Barcelona",
//       address_obj: {
//         street1: "Carrer Casp 1-13",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08010",
//         address_string: "Carrer Casp 1-13, 08010 Barcelona Spain",
//       },
//       description:
//         "Located in the heart of Barcelona, near Passeig de Gràcia, this hotel is regarded as a cultural hotspot where you can find art, design, fashion and music. It is a source of inspiration and creativity for all its visitors. It boasts rooms and suites featuring an urban style, and restaurants offering Mediterranean cuisine, along with tempting cocktails. Furthermore, it also features a rooftop swimming pool, a spa, a fully equipped gym, an urban garden, a Rooftop Bar and over 600 m2 of versatile spaces. Pets allowed (extra charge).",
//       rating: "5.0",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 565920146,
//           is_blessed: false,
//           caption: "Rooftop Pool",
//           published_date: "2021-12-29T10:50:23.896Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/41/92/rooftop-pool.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/41/92/rooftop-pool.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/41/92/rooftop-pool.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/41/92/rooftop-pool.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/41/92/rooftop-pool.jpg",
//             },
//           },
//           album: "Pool/Beach Area",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 565920865,
//           is_blessed: false,
//           caption: "Studio ME+ Suite",
//           published_date: "2021-12-29T11:04:45.12Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/44/61/studio-me-suite.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/44/61/studio-me-suite.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/44/61/studio-me-suite.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/44/61/studio-me-suite.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/44/61/studio-me-suite.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 565920465,
//           is_blessed: false,
//           caption: "ME welcomes YOU - ME Barcelona.",
//           published_date: "2021-12-29T10:54:37.08Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/42/d1/me-welcomes-you.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/42/d1/me-welcomes-you.jpg",
//             },
//             medium: {
//               height: 153,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/42/d1/me-welcomes-you.jpg",
//             },
//             large: {
//               height: 336,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/42/d1/me-welcomes-you.jpg",
//             },
//             original: {
//               height: 782,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/42/d1/me-welcomes-you.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 565920477,
//           is_blessed: false,
//           caption: "TERRENAL Restaurant - ME Barcelona.",
//           published_date: "2021-12-29T10:54:52.907Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/42/dd/terrenal.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/42/dd/terrenal.jpg",
//             },
//             medium: {
//               height: 165,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/42/dd/terrenal.jpg",
//             },
//             large: {
//               height: 363,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/42/dd/terrenal.jpg",
//             },
//             original: {
//               height: 846,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/42/dd/terrenal.jpg",
//             },
//           },
//           album: "Dining    ",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 565920886,
//           is_blessed: false,
//           caption: "Standard Room - ME Barcelona.",
//           published_date: "2021-12-29T11:05:09.526Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/21/bb/44/76/standard-room.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/21/bb/44/76/standard-room.jpg",
//             },
//             medium: {
//               height: 166,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/21/bb/44/76/standard-room.jpg",
//             },
//             large: {
//               height: 366,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/21/bb/44/76/standard-room.jpg",
//             },
//             original: {
//               height: 851,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/bb/44/76/standard-room.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "1940950",
//       name: "Hotel Ohla Barcelona",
//       address_obj: {
//         street1: "Via Laietana 49",
//         street2: "Ciutat Vella",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08003",
//         address_string: "Via Laietana 49 Ciutat Vella, 08003 Barcelona Spain",
//       },
//       description:
//         "Ohla Barcelona Hotel is a five-star boutique hotel located in the historical center of the city Barcelona, surrounded by three of the city's most popular sight-seeing and shopping areas: the Gothic Quarter, the Born and the Eixample. Inaugurated in February 2011, its location is perfect for tourism, shopping or business, with a fusion of calm serenity and the bustle of downtown Barcelona. The project has left untouched the building's historical facade from 1920 and other listed elements, including the main staircase, while giving the establishment a cutting-edge, minimalist interior design that combines various textures of black, white and oak wood. The building stands out for the sculpture on the facade by world-renowned artist, Frederic Amat. The hotel has 74 rooms, all equipped with a 40-inch TV screen and satellite channels, free Wi-Fi, telephone, safe box with room for a 17-inch laptop, adjustable lighting, individual thermostat, Egyptian cotton sheets, robe, slippers, kettle and minibar. Its culinary spaces are one of the highlights of the hotel, which locals consider great meeting points: Caelis restaurant, awarded with a Michelin star; La Plassohla, 'tapas' and small plates and Vistro 49, a boutique bar specialized in wines and cocktails. The terrace and the enclosed pool, the only one of its kind in Barcelona, have been called one of the best places to relax and enjoy a spectacular view of the city. Meeting rooms, gym, sauna and massage room, internet corner and parking garage are just some of the other services the department of Public Relations can offer to even further personalize each guest's stay and ensure it is an unforgettable experience. In short, a world of experiences that the whole Ohla Barcelona team offers guests looking for a hotel with charm and personality in the center of Barcelona.",
//       rating: "4.5",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 720226784,
//           is_blessed: false,
//           caption: "Exterior View",
//           published_date: "2023-12-02T01:12:35.079Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/2a/ed/c9/e0/exterior-view.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/2a/ed/c9/e0/exterior-view.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/2a/ed/c9/e0/exterior-view.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/2a/ed/c9/e0/exterior-view.jpg",
//             },
//             original: {
//               height: 683,
//               width: 1024,
//               url: "https://media-cdn.tripadvisor.com/media/photo-w/2a/ed/c9/e0/exterior-view.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//         },
//         {
//           id: 64515307,
//           is_blessed: false,
//           caption: "Ohla Terraza",
//           published_date: "2013-05-02T12:11:07.398Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/03/d8/6c/eb/ohla-hotel.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/03/d8/6c/eb/ohla-hotel.jpg",
//             },
//             medium: {
//               height: 145,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/03/d8/6c/eb/ohla-hotel.jpg",
//             },
//             large: {
//               height: 320,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/03/d8/6c/eb/ohla-hotel.jpg",
//             },
//             original: {
//               height: 1167,
//               width: 2000,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/03/d8/6c/eb/ohla-hotel.jpg",
//             },
//           },
//           album: "Pool/Beach Area",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 64515992,
//           is_blessed: false,
//           caption: "Ohla Terraza",
//           published_date: "2013-05-02T12:23:12.256Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/03/d8/6f/98/ohla-hotel.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/03/d8/6f/98/ohla-hotel.jpg",
//             },
//             medium: {
//               height: 150,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/03/d8/6f/98/ohla-hotel.jpg",
//             },
//             large: {
//               height: 330,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/03/d8/6f/98/ohla-hotel.jpg",
//             },
//             original: {
//               height: 768,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/03/d8/6f/98/ohla-hotel.jpg",
//             },
//           },
//           album: "Pool/Beach Area",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 461817623,
//           is_blessed: false,
//           caption: "Caelis Privé",
//           published_date: "2020-07-10T09:12:46.677Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/86/c7/17/caelis-prive.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/86/c7/17/caelis-prive.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/1b/86/c7/17/caelis-prive.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/86/c7/17/caelis-prive.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/86/c7/17/caelis-prive.jpg",
//             },
//           },
//           album: "Business Center/Function Rooms",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 409685588,
//           is_blessed: false,
//           caption: "",
//           published_date: "2019-07-22T10:16:21.334Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/18/6b/4e/54/hotel-ohla-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/18/6b/4e/54/hotel-ohla-barcelona.jpg",
//             },
//             medium: {
//               height: 150,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/18/6b/4e/54/hotel-ohla-barcelona.jpg",
//             },
//             large: {
//               height: 330,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/18/6b/4e/54/hotel-ohla-barcelona.jpg",
//             },
//             original: {
//               height: 768,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/18/6b/4e/54/hotel-ohla-barcelona.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//     {
//       location_id: "190616",
//       name: "Majestic Hotel & Spa Barcelona",
//       address_obj: {
//         street1: "Paseo de Gracia, 68 - 70",
//         city: "Barcelona",
//         state: "Province of Barcelona",
//         country: "Spain",
//         postalcode: "08007",
//         address_string: "Paseo de Gracia, 68 - 70, 08007 Barcelona Spain",
//       },
//       description:
//         "Deluxe 5-star traditional hotel in the real heart of Barcelona, few steps away from Gaudi monuments and famous Rambla. Entirely renovated, it offers excellence in service for the most demanding travelers. Rooftop terrace with panoramic view and outdoor pool.",
//       rating: "4.5",
//       category: {
//         name: "hotel",
//         localized_name: "Hotel",
//       },
//       images: [
//         {
//           id: 686784822,
//           is_blessed: false,
//           caption:
//             "Sunset at Passeig de Gràcia - Majestic Hotel & Spa Barcelona 5* GL",
//           published_date: "2023-04-27T14:00:11.451Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/28/ef/81/36/sunset-at-passeig-de.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/28/ef/81/36/sunset-at-passeig-de.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/28/ef/81/36/sunset-at-passeig-de.jpg",
//             },
//             large: {
//               height: 367,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/28/ef/81/36/sunset-at-passeig-de.jpg",
//             },
//             original: {
//               height: 695,
//               width: 1042,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/28/ef/81/36/sunset-at-passeig-de.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 133601474,
//           is_blessed: false,
//           caption: "Detalle de Fachada - Majestic Hotel & Spa Barcelona 5* GL",
//           published_date: "2015-05-25T14:23:23.713Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
//             },
//             medium: {
//               height: 166,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
//             },
//             large: {
//               height: 364,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
//             },
//             original: {
//               height: 596,
//               width: 900,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/07/f6/98/c2/majestic-hotel-spa-barcelona.jpg",
//             },
//           },
//           album: "Hotel & Grounds",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 94440074,
//           is_blessed: false,
//           caption:
//             "Suites with Views of Passeig de Gracia - Majestic Hotel & Spa Barcelona 5* GL",
//           published_date: "2014-03-25T16:27:22.536Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
//             },
//             medium: {
//               height: 166,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
//             },
//             large: {
//               height: 366,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/05/a1/0a/8a/majestic-hotel-spa-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 133601909,
//           is_blessed: false,
//           caption:
//             "Penthouse Sagrada Familia - Majestic Hotel & Spa Barcelona 5* GL",
//           published_date: "2015-05-25T14:26:56.279Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
//             },
//             medium: {
//               height: 167,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
//             },
//             large: {
//               height: 366,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
//             },
//             original: {
//               height: 600,
//               width: 900,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/07/f6/9a/75/majestic-hotel-spa-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//         {
//           id: 94439968,
//           is_blessed: false,
//           caption:
//             "Suites con vistas de Paseo de Gracia - Majestic Hotel & Spa Barcelona 5* GL",
//           published_date: "2014-03-25T16:24:58.717Z",
//           images: {
//             thumbnail: {
//               height: 50,
//               width: 50,
//               url: "https://media-cdn.tripadvisor.com/media/photo-t/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
//             },
//             small: {
//               height: 150,
//               width: 150,
//               url: "https://media-cdn.tripadvisor.com/media/photo-l/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
//             },
//             medium: {
//               height: 166,
//               width: 250,
//               url: "https://media-cdn.tripadvisor.com/media/photo-f/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
//             },
//             large: {
//               height: 366,
//               width: 550,
//               url: "https://media-cdn.tripadvisor.com/media/photo-s/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
//             },
//             original: {
//               height: 853,
//               width: 1280,
//               url: "https://media-cdn.tripadvisor.com/media/photo-o/05/a1/0a/20/majestic-hotel-spa-barcelona.jpg",
//             },
//           },
//           album: "Room/Suite",
//           source: {
//             name: "Management",
//             localized_name: "Management",
//           },
//           user: {
//             username: "Management",
//           },
//         },
//       ],
//     },
//   ];

//   try {
//     const locationsResponse = await fetch(
//       `https://api.content.tripadvisor.com/api/v1/location/search?${tripAdvisorApiKey}&language=en&searchQuery=${searchQuery}&category=${category}`,
//       {
//         method: "GET",
//         headers: {
//           Referer: "https://my-travel-planner-app.vercel.app",
//         },
//       }
//     );
//     const data = await locationsResponse.json();

//     const locations = data.data;

//     const fetchLocationDetails = locations.map(async (location) => {
//       const detailsResponse = await fetch(
//         `https://api.content.tripadvisor.com/api/v1/location/${location.location_id}/details?${tripAdvisorApiKey}`,
//         {
//           method: "GET",
//           headers: {
//             Referer: "https://my-travel-planner-app.vercel.app",
//           },
//         }
//       );

//       const detailData = await detailsResponse.json();
//       const description = detailData.description;
//       const rating = detailData.rating;
//       const category = detailData.category;

//       const imagesResponse = await fetch(
//         `https://api.content.tripadvisor.com/api/v1/location/${location.location_id}/photos?${tripAdvisorApiKey}&language=en`,
//         {
//           method: "GET",
//           headers: {
//             Referer: "https://my-travel-planner-app.vercel.app",
//           },
//         }
//       );

//       const imgData = await imagesResponse.json();
//       const images = imgData.data;

//       console.log(images);

//       // Merge data arrays:
//       return { ...location, description, rating, category, images };
//     });

//     const locationsWithDetails = await Promise.all(fetchLocationDetails);

//     return res.status(200).json({
//       data: locationsWithDetails,
//     });
//   } catch (error) {
//     console.log("error", error);
//     // return res.status(500).json({
//     //   error: false,
//     //   data: backupData,
//     //   message: "An error occurred while fetching travel data.",
//     // });
//   }
// };

export { getTravelData };
