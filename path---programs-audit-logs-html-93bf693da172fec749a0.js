webpackJsonp([0xe63ad1bfa18f],{727:function(e,t){e.exports={data:{markdownRemark:{html:'<div class="betanote" markdown="1">\n<b>Note:</b> This feature is currently in beta. Please send comments and questions to feedback@hackerone.com.\n</div>\n<p>Audit logs enable you to view all changes and actions done on your program so that you can review critical changes, find suspect actions, and investigate incidents for your program on HackerOne. Each log includes these details:</p>\n<ul>\n<li>The user that performed the action</li>\n<li>A description of the action that was performed</li>\n<li>The name of the event</li>\n<li>The user agent</li>\n<li>The date and time of the action</li>\n</ul>\n<p>To access your audit log, go to <strong>Program Settings > General > Audit Log</strong>.</p>\n<blockquote>\n<p><strong>Note:</strong> You must be an administrator of your program in order to access this feature.</p>\n</blockquote>\n<h2>Searching the program audit log</h2>\n<p>To search your audit entries, you can construct search queries using a variety of quantifiers and filters.</p>\n<p>You can search your audit log by:</p>\n<ul>\n<li>Event</li>\n<li>User</li>\n<li>Date</li>\n</ul>\n<p><strong>Note:</strong> Cases aren’t sensitive when searching results.</p>\n<h3>Search based on the event</h3>\n<p>Each time an action is made on your program, the action is tagged with a corresponding event name. You can search based on the event name to filter your results. To search for specific events, use the event qualifier in your query. For example: <code>event:teams.api_users.create</code></p>\n<p>These are the event names that you can use to search:</p>\n<table>\n<thead>\n<tr>\n<th>Even Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>teams.api_users.create</code></td>\n<td>Triggered when a new API token is created.</td>\n</tr>\n<tr>\n<td><code>teams.api_users.destroy</code></td>\n<td>Triggered when an existing API token is destroyed.</td>\n</tr>\n<tr>\n<td><code>teams.audit_log_items.export</code></td>\n<td>Triggered when a member creates an export of your program audit log.</td>\n</tr>\n<tr>\n<td><code>teams.groups.create</code></td>\n<td>Triggered when an admin creates a new team member group with permissions and members.</td>\n</tr>\n<tr>\n<td><code>teams.groups.update</code></td>\n<td>Triggered when an admin updates the name and/or permissions of an existing member group. Also triggered when members are added to or removed from this group.</td>\n</tr>\n<tr>\n<td><code>teams.groups.destroy</code></td>\n<td>Triggered when an admin destroys an existing team member group.</td>\n</tr>\n<tr>\n<td><code>teams.invitations.members.create</code></td>\n<td>Triggered when a new member joins your program through an invitation.</td>\n</tr>\n<tr>\n<td><code>teams.jira_integration.create</code></td>\n<td>Triggered when a new JIRA OAuth connection is created for your program.</td>\n</tr>\n<tr>\n<td><code>teams.jira_integration.update</code></td>\n<td>Triggered when the configuration of your program’s JIRA integration is updated.</td>\n</tr>\n<tr>\n<td><code>teams.jira_integration.verify</code></td>\n<td>Triggered when your program’s JIRA OAuth connection is verified.</td>\n</tr>\n<tr>\n<td><code>teams.jira_integration.destroy</code></td>\n<td>Triggered when your program’s JIRA integration is destroyed.</td>\n</tr>\n<tr>\n<td><code>teams.members.destroy</code></td>\n<td>Triggered when an admin or your SAML provisioner removes a member from your program. Also triggered when a member removes themselves from your program.</td>\n</tr>\n<tr>\n<td><code>teams.phabricator_integration.update</code></td>\n<td>Triggered when the configuration of your program’s Phabricator integration is updated.</td>\n</tr>\n<tr>\n<td><code>teams.phabricator_integration.destroy</code></td>\n<td>Triggered when your program’s Phabricator integration is destroyed.</td>\n</tr>\n<tr>\n<td><code>teams.reports.export</code></td>\n<td>Triggered when a member exports one or more of your program’s vulnerability reports.</td>\n</tr>\n<tr>\n<td><code>teams.reports.export_lifetime</code></td>\n<td>Triggered when a member exports all of your program’s vulnerability reports.</td>\n</tr>\n<tr>\n<td><code>teams.saml_settings.update</code></td>\n<td>Triggered when your program’s SAML provider settings are updated.</td>\n</tr>\n<tr>\n<td><code>teams.slack_integration.create</code></td>\n<td>Triggered when a new Slack integration is created for your program.</td>\n</tr>\n<tr>\n<td><code>teams.slack_integration.destroy</code></td>\n<td>Triggered when an existing Slack integration is destroyed.</td>\n</tr>\n<tr>\n<td><code>teams.slack_pipeline.create</code></td>\n<td>Triggered when a new pipeline is created to one of your Slack channels.</td>\n</tr>\n<tr>\n<td><code>teams.slack_pipeline.destroy</code></td>\n<td>Triggered when an existing Slack pipeline is destroyed.</td>\n</tr>\n<tr>\n<td><code>teams.update</code></td>\n<td>Triggered when your program attributes are updated.</td>\n</tr>\n</tbody>\n</table>\n<h3>Search based on the user</h3>\n<p>You can also search your audit log based on the user that performed the event. To search based on the user, use the user qualifier. For example:</p>\n<ul>\n<li><code>user:@hackbot</code> finds all events performed by hackbot</li>\n<li><code>user:@hackbot user:data_migration</code> finds all events performed by both hackbot and system user data_migration.</li>\n</ul>\n<p>You can also use asterisks as a wildcard to broaden your search results to a defined subset of all possible characters. For example:</p>\n<ul>\n<li><code>user:@h*t</code> finds all events performed by users that have a username that starts with h and ends in t.</li>\n</ul>\n<p>Events can also be performed by the internal system on behalf of a user. You can search by these system users:</p>\n<table>\n<thead>\n<tr>\n<th>System User</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>atlassian_uninstaller</code></td>\n<td>Initiated to destroy your program’s bidirectional integration to the JIRA cloud application.</td>\n</tr>\n<tr>\n<td><code>data_migration</code></td>\n<td>Initiated when an event is performed through data migration.</td>\n</tr>\n<tr>\n<td><code>product_edition_downgrader</code></td>\n<td>Initiated when an event is performed during a product edition downgrade. This includes destroying API tokens, Phabricator integration, and JIRA integration.</td>\n</tr>\n<tr>\n<td><code>saml_jit_provisioner</code></td>\n<td>Initiated when a member is added to or removed from your program, or when a member’s team member groups are updated through SAML Just-In-Time Provisioning.</td>\n</tr>\n<tr>\n<td><code>sandbox_setup</code></td>\n<td>Initiated when setting up a sandboxed program.</td>\n</tr>\n<tr>\n<td><code>slack_api_error</code></td>\n<td>Initiated when slack integration is destroyed due to an API error.</td>\n</tr>\n</tbody>\n</table>',frontmatter:{path:"/programs/audit-logs.html",id:"programs/audit-logs",title:"Audit Logs",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-audit-logs-html-93bf693da172fec749a0.js.map