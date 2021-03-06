(function() {
  'use strict';
  angular
    .module('openflix')
    .service('MockMovieSvc', MockMovieSvc);

  /**
   * Fake movie API service
   * @type {Object}
   */
  MockMovieSvc.$inject = [];

  function MockMovieSvc() {

    var service = {
      getGenres: getGenres,
      getPopular: getPopular,
      getById: getById,
      getByGenre: getByGenre
    };

    return service;

    //////////////

    function getGenres() {
      return genres;
    }

    /**
     * returns the nth most popular
     * torrents
     * @return {Array} Object array
     */
    function getPopular() {
      return collection;
    }

    /**
     * returns a movie by id
     * @param  {String} id Movie identificator
     * @return {Object}    Movie object
     */
    function getById(id) {
      return collection[id];
    }

    /**
     * returns a collection of movies
     * by a given genre
     * @param  {int} id Genre
     * @return {Array}  Movie array
     */
    function getByGenre(id) {
      return collection;
    }

  }

  /**
   * Static genre collection
   * @type {Array}
   */
  var genres = [
    {
      'id': 28,
      'name': 'Action'
    },
    {
      'id': 12,
      'name': 'Adventure'
    },
    {
      'id': 16,
      'name': 'Animation'
    },
    {
      'id': 35,
      'name': 'Comedy'
    },
    {
      'id': 80,
      'name': 'Crime'
    },
    {
      'id': 99,
      'name': 'Documentary'
    },
    {
      'id': 18,
      'name': 'Drama'
    },
    {
      'id': 10751,
      'name': 'Family'
    },
    {
      'id': 14,
      'name': 'Fantasy'
    },
    {
      'id': 10769,
      'name': 'Foreign'
    },
    {
      'id': 36,
      'name': 'History'
    },
    {
      'id': 27,
      'name': 'Horror'
    },
    {
      'id': 10402,
      'name': 'Music'
    },
    {
      'id': 9648,
      'name': 'Mystery'
    },
    {
      'id': 10749,
      'name': 'Romance'
    },
    {
      'id': 878,
      'name': 'Science Fiction'
    },
    {
      'id': 10770,
      'name': 'TV Movie'
    },
    {
      'id': 53,
      'name': 'Thriller'
    },
    {
      'id': 10752,
      'name': 'War'
    },
    {
      'id': 37,
      'name': 'Western'
    }
  ];

  /**
   * Static movie collection
   * @type {Array}
   */
  var collection = [
    {
      'adult': false,
      'backdrop_path': '/5bKy4O0WQTa3MG2wPWViUNUTIEG.jpg',
      'id': 82992,
      'original_title': 'Fast & Furious 6',
      'release_date': '2013-05-24',
      'poster_path': '/3Izae8UATwSHizQiEVZEWf53wjM.jpg',
      'popularity': 56.5133968700669,
      'title': 'Fast & Furious 6',
      'vote_average': 7.3,
      'vote_count': 13
    },
    {
      'adult': false,
      'backdrop_path': '/n9X2DKItL3V0yq1q1jrk8z5UAki.jpg',
      'id': 68721,
      'original_title': 'Iron Man 3',
      'release_date': '2013-05-03',
      'poster_path': '/kC4NM99bJ5Xq03O6XQ6602GKRsi.jpg',
      'popularity': 55.118598761825,
      'title': 'Iron Man 3',
      'vote_average': 7.3,
      'vote_count': 79
    },
    {
      'adult': false,
      'backdrop_path': '/22DQWwjaam1LHTAEapxO2Wg7s2H.jpg',
      'id': 47964,
      'original_title': 'A Good Day to Die Hard',
      'release_date': '2013-02-14',
      'poster_path': '/7JKli6FqxK6kEsNRUW8JVGmGSNI.jpg',
      'popularity': 53.9077809585504,
      'title': 'A Good Day to Die Hard',
      'vote_average': 6,
      'vote_count': 32
    },
    {
      'adult': false,
      'backdrop_path': '/rRK0LRpvRI2didoMaBFt1GqxjEy.jpg',
      'id': 134411,
      'original_title': 'Snitch',
      'release_date': '2013-02-22',
      'poster_path': '/vWRivfYs8dMJnFESCKOqXcEUUYN.jpg',
      'popularity': 48.6472963993062,
      'title': 'Snitch',
      'vote_average': 7.7,
      'vote_count': 42
    },
    {
      'adult': false,
      'backdrop_path': '/jjAq3tCezdlQduusgtMhpY2XzW0.jpg',
      'id': 49051,
      'original_title': 'The Hobbit: An Unexpected Journey',
      'release_date': '2012-12-12',
      'poster_path': '/h1XjBJoWdOh8aegBoVYKgABQZSL.jpg',
      'popularity': 47.5020577063227,
      'title': 'The Hobbit: An Unexpected Journey',
      'vote_average': 6.7,
      'vote_count': 183
    },
    {
      'adult': false,
      'backdrop_path': '/4cCQkOv4GfQoTtDzHl54KS3S39N.jpg',
      'id': 68728,
      'original_title': 'Oz: The Great and Powerful',
      'release_date': '2013-03-08',
      'poster_path': '/693zyX9HmZtqoDNLL1QPjMZHdq8.jpg',
      'popularity': 45.8321401309985,
      'title': 'Oz: The Great and Powerful',
      'vote_average': 7.6,
      'vote_count': 34
    },
    {
      'adult': false,
      'backdrop_path': '/4wieJ74tXkZDMiiwJ6yMr7LgSpR.jpg',
      'id': 60304,
      'original_title': 'Hansel & Gretel: Witch Hunters',
      'release_date': '2013-01-25',
      'poster_path': '/yDIVWFJqFLIeS8E1R6GG9uwPMS3.jpg',
      'popularity': 32.6524484520598,
      'title': 'Hansel & Gretel: Witch Hunters',
      'vote_average': 7.5,
      'vote_count': 34
    },
    {
      'adult': false,
      'backdrop_path': '/u4r1VxLPBZXGHMxUnckjes7RWVD.jpg',
      'id': 82654,
      'original_title': 'Warm Bodies',
      'release_date': '2013-02-01',
      'poster_path': '/7tv6NHYiYeskLJzGamxtknC3mPt.jpg',
      'popularity': 30.5946592068883,
      'title': 'Warm Bodies',
      'vote_average': 7.6,
      'vote_count': 30
    },
    {
      'adult': false,
      'backdrop_path': '/qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg',
      'id': 68718,
      'original_title': 'Django Unchained',
      'release_date': '2012-12-25',
      'poster_path': '/hCk3wAojAgUa9Ey2tzutt8rzmgP.jpg',
      'popularity': 29.1149763813121,
      'title': 'Django Unchained',
      'vote_average': 7.2,
      'vote_count': 159
    },
    {
      'adult': false,
      'backdrop_path': '/ns0IojuqJe24AHTxe8RVcWJUCDM.jpg',
      'id': 54138,
      'original_title': 'Star Trek Into Darkness',
      'release_date': '2013-05-16',
      'poster_path': '/bnttrKDyTUerPIGUXYX79CRWWUF.jpg',
      'popularity': 27.6521203700075,
      'title': 'Star Trek Into Darkness',
      'vote_average': 8.5,
      'vote_count': 16
    },
    {
      'adult': false,
      'backdrop_path': '/glJAmPmXVBDpP0q2Z7yAs9q7Jr8.jpg',
      'id': 119283,
      'original_title': 'Parker',
      'release_date': '2013-01-25',
      'poster_path': '/dbWSgbfxxxLsGipXYuBYi4k4FTA.jpg',
      'popularity': 24.2810191038002,
      'title': 'Parker',
      'vote_average': 5.9,
      'vote_count': 9
    },
    {
      'adult': false,
      'backdrop_path': '/y6a2HpdZ1MlsmAZVTn3XeDoyIka.jpg',
      'id': 109431,
      'original_title': 'Identity Thief',
      'release_date': '2013-02-07',
      'poster_path': '/lOF4rI6SxgRsVLW8odsauqnhB9Z.jpg',
      'popularity': 22.3382127204636,
      'title': 'Identity Thief',
      'vote_average': 4.9,
      'vote_count': 17
    },
    {
      'adult': false,
      'backdrop_path': '/gIfO0pjuzOv0qun6VOuifa0c6OY.jpg',
      'id': 13804,
      'original_title': 'Fast And Furious',
      'release_date': '2009-03-11',
      'poster_path': '/ft8IqAGFs3V7i87z0t0EVRUjK1p.jpg',
      'popularity': 20.1446806145099,
      'title': 'Fast And Furious',
      'vote_average': 7.7,
      'vote_count': 41
    },
    {
      'adult': false,
      'backdrop_path': '/pAIeqf7NpAE6EL0ZkIcaRkwcPyz.jpg',
      'id': 75780,
      'original_title': 'Jack Reacher',
      'release_date': '2012-12-21',
      'poster_path': '/38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg',
      'popularity': 19.1763149832215,
      'title': 'Jack Reacher',
      'vote_average': 7.3,
      'vote_count': 54
    },
    {
      'adult': false,
      'backdrop_path': '/lmIqH8Qsv3IvDg0PTFUuVr89eBT.jpg',
      'id': 9799,
      'original_title': 'The Fast and the Furious',
      'release_date': '2001-06-17',
      'poster_path': '/3cucyEuLOOjjJ8nem5facsTEy68.jpg',
      'popularity': 18.1965285044048,
      'title': 'The Fast and the Furious',
      'vote_average': 7.9,
      'vote_count': 46
    },
    {
      'adult': false,
      'backdrop_path': '/nL1Q0micYpF5nNkaI2ZNeLuOLGZ.jpg',
      'id': 51497,
      'original_title': 'Fast Five',
      'release_date': '2011-04-28',
      'poster_path': '/cA81CI8odKv5KHRUUzJbj83yN7c.jpg',
      'popularity': 17.4500929305629,
      'title': 'Fast Five',
      'vote_average': 8,
      'vote_count': 51
    },
    {
      'adult': false,
      'backdrop_path': '/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg',
      'id': 24428,
      'original_title': 'The Avengers',
      'release_date': '2012-05-04',
      'poster_path': '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
      'popularity': 17.2196799692765,
      'title': 'The Avengers',
      'vote_average': 7.4,
      'vote_count': 273
    },
    {
      'adult': false,
      'backdrop_path': null,
      'id': 168259,
      'original_title': 'Fast & Furious 7',
      'release_date': '2014-07-11',
      'poster_path': '/iYDlZgWg8ltTwDEcsvnLQfYkJKj.jpg',
      'popularity': 16.8820145528661,
      'title': 'Fast & Furious 7',
      'vote_average': 0,
      'vote_count': 0
    },
    {
      'adult': false,
      'backdrop_path': '/g62SFRNTiVK2e5FMqivziQ4SX6J.jpg',
      'id': 109421,
      'original_title': 'Side Effects',
      'release_date': '2013-02-08',
      'poster_path': '/ttD69Yhh2BV1WVqr27NRbF8ubOW.jpg',
      'popularity': 16.6879135174643,
      'title': 'Side Effects',
      'vote_average': 5.1,
      'vote_count': 17
    },
    {
      'adult': false,
      'backdrop_path': '/7ObVZtidm7uGWPrNkep2kf2wUPN.jpg',
      'id': 106021,
      'original_title': 'The Expatriate',
      'release_date': '2012-09-26',
      'poster_path': '/EWFPlsGbwFgTgnPfJe93OXdCI6.jpg',
      'popularity': 16.338470937008,
      'title': 'Erased',
      'vote_average': 5.7,
      'vote_count': 10
    }
  ];

})();
