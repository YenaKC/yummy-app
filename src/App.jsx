import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { RecipeList } from './components/RecipeList';
import { AboutPage } from './pages/AboutPage';
import { DashboardPage } from './pages/DashboardPage';
import { RecipeDetailsPage } from './pages/RecipeDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import recipeData from './assets/data/recipes.json';


export default function App() {


  const [currentRecipeList, setCurrentRecipeList] = useState(recipeData);
  const deleteRecipe = (id) => {
    const newList = currentRecipeList.filter((recipe) => {
      return recipe.id !== id;
    })
    setCurrentRecipeList(newList);
  }

  const addNewRecipe = (newRecipeObj) => {
    const uuid = self.crypto.randomUUID()
    const newObj = {
      id: uuid,
      ...newRecipeObj
    }
    const newRecipeAddedList = [newObj, ...currentRecipeList]
    setCurrentRecipeList(newRecipeAddedList)
  }


  return (
    <>
      <Navbar />
      <section className="page-content">
        <Sidebar />
        <Routes>

          <Route path='/' element={
            <RecipeList recipesList={currentRecipeList} onDelete={deleteRecipe} />
          } />
          <Route path='/about' element={<AboutPage />} />
          <Route
            path='/dashboard'
            element={<DashboardPage onSubmit={addNewRecipe} />} />
          <Route path='/recipe/:recipeId' element={<RecipeDetailsPage recipesList={currentRecipeList} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  )

}