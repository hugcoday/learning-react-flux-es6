Learning React Flux via ES6
=========================

* fork form [flux-react-router-example](https://github.com/gaearon/flux-react-router-example)
* thanks [Dan Abramov <dan.abramov@me.com>](http://github.com/gaearon) and facebook!

## high-light
There are a few bits special:

* It parses Github's nested JSON responses with [Normalizr](https://github.com/gaearon/normalizr);
* Content Stores [don't need to contain a giant `switch` with actions](https://github.com/gaearon/flux-react-router-example/blob/82a27eb85227ef85129e8bf0444e0f8d9abd6406/scripts/stores/UserStore.js#L18-L22);
* Router handlers are updated gracefully in `componentWillReceiveProps` if some page is requested with a different parameter;
* built in ES6 using [Babel](https://babeljs.io) and [Webpack](https://github.com/webpack/webpack), and has [React Hot Loader](http://gaearon.github.io/react-hot-loader/) integrated.

### my tips for flux ( in chinese )

reflux 对 flux 作了一些简化，非常有效的简化，这让 flux 在开发效率上大大提高，但 reflux 相对来说，更适合于小项目。
而 flux 在 store 上由于要注册  actions 的一些操作，这些代码编码比较复杂。
如果采用 ES6 , 这里有一个非常好的例子，可以大大简化 flux 的代码编码 https://github.com/gaearon/flux-react-router-example
这个例子中 store 的编码非常高效，主要得益于 decorators  （ 看 https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750  与 https://github.com/wycats/javascript-decorators ）

### JS dev stack
*  [json server](https://github.com/typicode/json-server) a simplest RESTfull server for JS dev, must.


### reference

* [the-two-pillars-of-javascript (part I)](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
and [(part II)](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4)
* todo: need more attention for [react and ES6](https://github.com/facebook/react/issues/613)
* [autobinding-react-and-es6-classes](http://www.ian-thomas.net/autobinding-react-and-es6-classes/)
* important archive: [the-case-for-flux](https://medium.com/@dan_abramov/the-case-for-flux-379b7d1982c6)
* important archive: [async-requests-with-react-js-and-flux-revisited](http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/)
* [@dan_abramov react list](https://medium.com/@dan_abramov/my-react-list-862227952a8c)
* important archive: [understanding facebook flux (chinese)](http://undefinedblog.com/facebook-flux/)
* [“Dumb”](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components use [pure rendering](https://github.com/gaearon/react-pure-render) as a performance optimization;
* [higher-order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) through [decorators](https://github.com/wycats/javascript-decorators) (experimental);

### Running

```
npm install
npm start
```

#### Doing Other Things

```
npm run lint # uses eslint
npm run build # build production version to dist folder
```

### How I Classify Stores

I tried to avoid some of the duplication I've seen in other Flux example, specifically in Stores.
I found it useful to logically divide Stores into three categories:

**Content Stores** hold all app entities. Everything that has an ID needs its own Content Store. Components that render individual items ask Content Stores for the fresh data.

Content Stores harvest their objects from *all* server actions. For example, `UserStore` [looks into `action.response.entities.users`](https://github.com/gaearon/flux-react-router-example/blob/82a27eb85227ef85129e8bf0444e0f8d9abd6406/scripts/stores/UserStore.js#L18-L22) if it exists *regardless* of which action fired. There is no need for a `switch`. [Normalizr](https://github.com/gaearon/normalizr) makes it easy to flatten any API reponses to this format.

```javascript
// Content Stores keep their data like this
{
  7: {
    id: 7,
    name: 'Dan'
  },
  ...
}
```

**List Stores** keep track of IDs of entities that appear in some global list (e.g. “feed”, “your notifications”). In this project, I don't have such Stores, but I thought I'd mention them anyway. They handle pagination.

They normally respond to just a few actions (e.g. `REQUEST_FEED`, `REQUEST_FEED_SUCCESS`, `REQUEST_FEED_ERROR`).

```javascript
// Paginated Stores keep their data like this
[7, 10, 5, ...]
```

**Indexed List Stores** are like List Stores but they define one-to-many relationship. For example, “user's subscribers”, “repository's stargazers”, “user's repositories”. They also handle pagination.

They also normally respond to just a few actions (e.g. `REQUEST_USER_REPOS`, `REQUEST_USER_REPOS_SUCCESS`, `REQUEST_USER_REPOS_ERROR`).

In most social apps, you'll have lots of these and you want to be able to quickly create one more of them.

```javascript
// Indexed Paginated Stores keep their data like this
{
  2: [7, 10, 5, ...],
  6: [7, 1, 2, ...],
  ...
}
```

See and run the source for more tips!

## webpack debug option
webpack --display-error-details
