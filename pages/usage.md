import Layout from '../components/Layout'
import { Slider, Heading, Text, Pre, Box, Container, Code, Divider } from 'rebass'
import Swatch from "../components/Swatch"
import ShortStory from "short-story"

export default Layout

# Usage

---

## Pages

The pages in this project are stored in the `src/pages` folder. Each `.md` file in the folder is a page, automatically accessible at the project's root. For example, the file `src/pages/animals.md` would be viewed after build at `https://www.your-project.com/animals`.

## Navigation

After you've created a new page, you'll want to add it to the sidebar navigation. To add a page to the sidebar, edit the `src/components/Sidebar.js` file.

Sidebar links are organized using a component called `ListSection`. You can either add your new page to an existing link section or create a new one. A typical ListSection looks like this:

```jsx
<ListSection
  title="Introduction"
  links={[
    { href: "", title: "About" },
    { href: "usage", title: "Usage" },
    { href: "updating", title: "Updating" },
    { href: "changelog", title: "Changelog" }
  ]}
/>
```

## MDX

Pages are written in [MDX](https://mdxjs.com/), a format that allows for both [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) syntax for and and [React JSX](https://reactjs.org/docs/introducing-jsx.html). Components can be imported into the file and displayed anywhere. For example, the component below is a live instance of the `Slider` component. It works!

<Slider/>

To create the Slider, we inserted the following code in page:

```jsx
<Slider />
```

In theory, this means that pages should easily be editable by non-developers while still allowing developers to place components in the page.

## Stories

At certain points in your design system documentation, you may wish to create an interactive version of a component to demonstrate the effects of different props or states.

While a project's developers may maintain a [Storybook](https://github.com/storybooks/storybook) that supports these sorts of interactive views, DsDocs provides a helper component, `ShortStory`, to enable component previews here as well.

<ShortStory name="Demo Story" knobs={{
	name: {
		type: "text",
		label: "Name",
		default: "Paul Testerburg"
		},
	bg: {
		type: "color",
		label: "Background",
		default: "#ffffff"
	}
	}}>
{state => <div style={{backgroundColor: state.bg}}>This story's name is {state.name}!</div>}
</ShortStory>

To create the ShortStory, we inserted the following code in the page:

```javascript
<ShortStory
  name="Demo Story"
  knobs={{
    name: {
      type: "text",
      label: "Name",
      default: "Paul Testerburg"
    },
    bg: {
      type: "color",
      label: "Background",
      default: "#ffffff"
    }
  }}
>
  {state => (
    <div style={{ backgroundColor: state.bg }}>
      This story's name is {state.name}!
    </div>
  )}
</ShortStory>
```

The ShortStory component uses [render props](https://reactjs.org/docs/render-props.html),
executing the child function with the state of the ShortStory component as an argument. The objects in the component's `knobs` prop are available on that state with their current values as set by the story's inputs.

There are many more knob types available. While ShortStory is also written by the same author of DsDocs, it is maintained and documented separately at [short-story](https://github.com/steveruizok/short-story).

## Customization

### Rebass

DsDocs is built with [Rebass v2](https://rebass-v2.now.sh/), a user interface library that uses [styled-system](https://github.com/jxnblk/styled-system).

### Styles

The site is styled using a global theme. To change this theme, find the `src/components/Theme.js` file and edit the values there.

The `Theme.js` file also includes style properties for the different components that are generated from markdown. You can change these values to further style how markdown components appear.

### Layout

If you'd like to change how the site is laid out, make your changes to the Layout file at `src/components/Layout.js`.

## Deployment

To deploy projects, run `npm run export`. This will create a web-ready build in the `out` folder. DsDocs also has a command, `npm run deploy`, pre-figured for deployment on [Google Firebase](https://firebase.google.com/).

DsDocs is a [NextJS](https://nextjs.org/) project. For more information about deployment, check the NextJS docs.
