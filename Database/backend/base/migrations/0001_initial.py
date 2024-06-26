# Generated by Django 4.1.13 on 2024-06-03 05:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email')),
                ('Firstname', models.CharField(default='SOME STRING', max_length=30)),
                ('Lastname', models.CharField(default='SOME STRING', max_length=30)),
                ('Company', models.CharField(max_length=30)),
                ('Action', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Functionality',
            fields=[
                ('Functionality_name', models.CharField(blank=True, max_length=30, null=True)),
                ('Functionality_code', models.IntegerField(null=True)),
                ('Description', models.TextField(blank=True, null=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('Product_name', models.CharField(blank=True, max_length=30, null=True)),
                ('Product_group', models.CharField(blank=True, max_length=30, null=True)),
                ('Description', models.TextField(blank=True, null=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Functionality_requested',
            fields=[
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('Functionality', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.functionality')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='functionality',
            name='Product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product'),
        ),
    ]
