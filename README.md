All -> User admins -> create roles.

Service disk -> Edit -> create menu with incidents.
Module -> New -> Put name and order.
Order is position, callers has lowest...
Choose order as the last to it is visible to all.

if not use override the access to both application and module is required.

2 ways to make views: configure -> form layout and form design.

Restricting data:
Open incident, right click on top or hamburger button,
go to view -> check (just to check views).
And then, configure -> form design.

second drop down view -> new.
In new tab, application navigation -> view -> system ui -> views.
open the view you created, if roles empty - available for everyone.
give role as training.

Creating new field and adding a table to that field of sys_user.
A new field in Incident form will be added and upon selecting it,
sys_user list will be visible.

-----
11.01.024

User not able to see the view.
Create view rules.
script will take the answer and redirect user to respective view.
ess - self service backend name.
Incidents are opened as "self service view" as admin.

Base tables and creating new tables, configuring it and schema maps.

Incident is also one of the table.
Task table, cmdb table - base tables in service now.

app nav -> tables.
Put label, name (backend name).
extend - fields available on the table will be put also in the custom table.
So, it is like inheriting base tables if we want.
create mobile module - for phones.
add module to menu - can inherit from pre-built or make new.
new menu name.
3 tabs, columns, controls and application access.

Dictionary entry new record.
Table name, tyoe, column label.
It is under the table, and we can add new ones, if we extended from
base, we will see base tables details as well.

In form design after configure, we will see the fields we made above.

Something made with course, and setting digits as 7, COU0101011...

Course application menu was also created, with a module we created.

Tables and columns.
Task, 3 tabs.
schema maps - tells us what tables are referenced.
So, task and cmdb ones will be empty for above case.
Seeing all info related to tables, their inheritance.

Parent-child incident relation.
Add parent incident from form design.

Work notes - used for people having itil role.
Additional comment- for users created this incident.
Only additonal comments are seen by the user, not work notes
since its not a part of itil.

List view edit.
We can edit fields from list view until special access controls aren't put.

Template - if user is using incident and creating same everytime, template
can be created in order to cut out the redundancy.

Hamburger icon, create a new template.

? How to rename a form view after?
-----
12.01.024

Update sets. Moving from one to other instance.
Best practices, batches.

sys_id - 32 characters long, unique value for each sessions.
Used to identify record in  system, any changes which are there.
For a user, it should be same for a role, in prod, dev or others.

? Why is should not be unique, in simple words?
Or it will create a new record, and if it finds a record, it will not create a
new business rule, if not, then it will create one.

To move from dev to prod or any environment, capture the changes in update sets.

When update set is created it will show in scope.

System update -> update sources, we can create remote instances.
Moving from dev to test.
Create remote in dev, then connect to test and pull from dev to test.

In update sources, remote instances, -> new.
Create user since above action needs credential s.
Admin access needed for the activity.
Test connection using test connection option.

Update sets.
Retrieved update sets - We can check the completed sets received or transmitted.

Update logs - Logs related to update sets, used when there are error in rec/trans.

Local update sets - Requirement is to complete a story, move to test env.
So, work on story, before starting to work, gotta capture the customizations in update sets.
So, create local update set and set that as current.

Default update set - don't touch them, automatic updates are captured here if no other is created.
If want to capture, create your own local update sets and capture changes there.

First run preview of update sets, then commit.

After commiting it becomes local update set.

If we want to revert update sets, open using local update and press back-out.

Users should be in coordination as to who is moving update sets to not have conflicts.

Merge update sets -> It will show available update sets in the env with in progress.
Put name, description. Merge the ones you want to, can't be undone.


-----
17.01.024

Batching update sets and migrating.

Name - batch update set.
Save.
Then just click whatever sets you want to save in this batch from the list from the
parent tab.
If we set state as complete of parent, all will be complete.
Now just migrate it.
Previewing them is good practive, after migration.

Non-automatic way to migrate, we can migrate manually.
Create update set.
Set as complete, export to XML.
Update sets -> Retrieved sets, Import XML.
Preview update sets, and then the states will change.

Notifications for tables.
All -> notifications under system notification -> New.

For adding assignment group, select user/groups and choose Assignment Group (in green).

Notifications - Search emails, under system logs.

Email properties -> By default disabled email rec/transm.

Calling scripts from notifications.
Go to notifications -> find a script?

Format is - 
```javascript
${mail_script:get_all_records}
```

-----
18.01.024

Events - To trigger at any situation.
Under "when to send" in notification, we can select "event is fired".

Reports.

-----
22.01.024

Import sets.
Collecting data from multiple data sources.
Catalogue item.


Calling server side scripts from client scripts.

-----
Scripts.

onChange of one ID we can change other values.
Below example:
onChange of called ID, if caller is someone defined.

Right click on incidents, client script, and then write.
name - OnChange Caller.

Script field -
```javascript
var caller = g_form.getValue("caller_id");
if (caller == sys_id of chosen caller)
{
    g_form.setMandatory("assisgnment_group", true);
    g_form.setMandatory("assigned_to", true);
}
else
{
    g_form.setMandatory("assisgnment_group", false);
    g_form.setMandatory("assigned_to", false);
}
```
If field is a reference type (referening to other table), then we need
sys_id of that record, and not reference type.
Right click, copy sys_id.

Above, we can replace caller with newValue as well. :0 :x :!

onSubmit -
If either of below is empty, then no submission allowed.
```javascript
var assgrp = g_form.getValue("assignment_group");
var assto = g_form.getValue("assignment_to");
if (assgrp == "" || assto == "")
{
    if (assgrp == "" && assto == "")
    {
        g_form.setMandatory("assignment_group", true);
        g_form.showFieldMsg("assignment_group", "assignment group is mandatory");
        g_form.setMandatory("assignment_to", true);
        g_form.showFieldMsg("assignment_to", "assignment to is mandatory");
        return false;
    }
    else if (assgrp == "" && assto != "")
    {
         g_form.setMandatory("assignment_group", true);
         g_form.showFieldMsg("assignment_group", "assignment group is mandatory");      
    }
    else if (assgrp != "" && assto == "")
    {
         g_form.setMandatory("assignment_to", true);
         g_form.showFieldMsg("assignment_to", "assignment to is mandatory");   
    }
}
```
Catalog client items scripts - There we can also write client scripts.

Client script, omLoad and using g_user instead of g_form.


