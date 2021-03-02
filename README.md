<img width="200" alt="Fleet logo, landscape, dark text, transparent background" src="https://user-images.githubusercontent.com/618009/103300491-9197e280-49c4-11eb-8677-6b41027be800.png">

# Orbit osquery

Orbit is Fleet's [osquery](https://github.com/osquery/osquery) runtime and autoupdater. With Orbit, it's easy to deploy osquery, manage configurations, and stay up to date. Orbit eases the deployment of osquery connected with a [Fleet server](https://github.com/fleetdm/fleet), and is a (near) drop-in replacement for osquery in a variety of deployment scenarios.

## Capabilities

| Capability                           | Status |
| ------------------------------------ | ------ |
| Secure autoupdate for osquery        | ✅     |
| Secure autoupdate for Orbit          | ✅     |
| Full osquery flag customization      | ✅     |
| Package tooling for macOS `.pkg`     | ✅     |
| Package tooling for Linux `.deb`     | ✅     |
| Package tooling for Linux `.rpm`     | 🔜     |
| Package tooling for Windows `.msi`   | 🔜     |
| Manage/update osquery extensions     | 🔜     |
| Manage cgroups for Linux performance | 🔜     |

## Usage

General information and flag documentation can be accessed by running `orbit --help`.

### Permissions

Orbit generally expects root permissions to be able to create and access it's working files. 

To get root level permissions:

#### macOS/Linux

Prefix `orbit` commands with `sudo` (`sudo orbit ...`) or run in a root shell.

#### Windows

Run Powershell or cmd.exe with "Run as administrator" and start `orbit` commands from that shell.

### Osquery shell

Run an `osqueryi` shell with `orbit osqueryi` or `orbit shell`.

### Connect to a Fleet server

Use the `--fleet-url` and `--enroll-secret` flags to connect to a Fleet server.

For example:

``` sh
orbit --fleet-url=https://localhost:8080 --enroll-secret=the_secret_value 
```

Use `--fleet_certificate` to provide a path to a certificate bundle when necessary for osquery to verify the authenticity of the Fleet server (typically when using a Windows client or self-signed certificates):

``` sh
orbit --fleet-url=https://localhost:8080 --enroll-secret=the_secret_value --fleet-certificate=cert.pem 
```

Add the `--insecure` flag for connections using otherwise invalid certificates:

``` sh
orbit --fleet-url=https://localhost:8080 --enroll-secret=the_secret_value --insecure 
```

### Osquery flags

Orbit can be used as near drop-in replacement for `osqueryd`, enhancing standard osquery with autoupdate capabilities. Orbit passes through any options after `--` directly to the `osqueryd` instance.

For example, the following would be a typical drop-in usage of Orbit:

``` sh
orbit -- --flagfile=flags.txt
```

## Packaging

TODO

## FAQs

### How does Orbit compare with Kolide Launcher?

Orbit is inspired by the success of [Kolide Launcher](https://github.com/kolide/launcher), and approaches a similar problem domain with new strategies informed by the challenges encountered in real world deployments.

- Both Orbit and Launcher use [The Update Framework](https://theupdateframework.com/) specification for managing updates. Orbit utilizes the official [go-tuf](https://github.com/theupdateframework/go-tuf) library, while Launcher has it's own implementation of the specification.
- Orbit can be deployed as a (near) drop-in replacement for osquery, supporting full customization of the osquery flags. Launcher heavily manages the osquery flags making deployment outside of Fleet or Kolide's SaaS difficult.
- Orbit prefers the battle-tested plugins of osquery. Orbit uses the built-in logging, configuration, and live query plugins, while Launcher uses custom implementations.
- Orbit prefers the built-in osquery remote APIs. Launcher utilizes a custom gRPC API that has led to issues with character encoding, load balancers/proxies, and request size limits.
- Orbit encourages use of the osquery performance Watchdog, while Launcher disables the Watchdog.

Additionally, Orbit aims to tackle problems out of scope for Launcher:

- Configure updates via release channels, providing more granular control over agent versioning.
- Support for deploying and updating osquery extensions (🔜).
- Manage osquery versions and startup flags from a remote (Fleet) server (🔜).
- Further control of osquery performance via cgroups (🔜).

### Is Orbit Free?

Yes! Orbit is licensed under an MIT license and all uses are encouraged.

## Community

#### Chat

Please join us in the #fleet channel on [osquery Slack](https://osquery.slack.com/join/shared_invite/zt-h29zm0gk-s2DBtGUTW4CFel0f0IjTEw#/).

<a href="https://fleetdm.com"><img alt="Banner featuring a futuristic cloud city with the Fleet logo" src="https://user-images.githubusercontent.com/618009/98254443-eaf21100-1f41-11eb-9e2c-63a0545601f3.jpg"/></a>
