# jupyterlab_viz_krunk

A JupyterLab extension for Graphviz markdown support using viz.js.

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_viz_krunk
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_viz_krunk
```

## Example

#### Default settings

settings will be applied globally until the next defaults detected.
after defaults loads, the page needs to be refreshed or the tab needs to be reopened to take effects.

````
```graphviz
defaults {
    node [shape=rect style="rounded"]
}
```
````

#### Default settings with a graph

````
```graphviz
defaults {
    node [shape=rect style="rounded"]
}
digraph {
    a -> b
    b -> c
    a -> c
}
```
````

#### Graphviz render

````
```graphviz
digraph {
  graph [rankdir="LR"]
  node [shape="circle"]
  a [label=<<i>A</i>>, color="red"]
  b [label=<<b>B</b>>, color="green"]
  a -> b [label="1"]
  b -> c:name [label="2"]
  subgraph cluster_1 {
    c [label=<<table><tr><td port="name">C</td></tr></table>>]
  }
}
```
````

#### Use Graphviz with HTML elements

````
<span style="float:right;">

```graphviz
digraph {
    a -> b
    b -> c
    a -> c
}
```

</span>
````

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_viz_krunk directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_viz_krunk
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-viz-krunk` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
