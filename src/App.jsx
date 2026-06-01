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

// ALL RECIPE LIST
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

  // UPDATE RECIPE : if the user want Update the recipe, execute onUpdate
  const updateRecipe = (updatedRecipeObj) => {
    const newUpdatedList = currentRecipeList.map((recipe) => {
      return recipe.id === updatedRecipeObj.id // if the id exist on the database already, change to the edited recipe
      ? updatedRecipeObj 
      : recipe
    })
    setCurrentRecipeList(newUpdatedList)
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
          
          {/* CREATE/UPDATE/DETAILS/DELETE ON DASHBOARD  */}
          <Route
            path='/dashboard/:recipeId?' //'..recipeID?' has possiblity both /dashboard and /dashboard/:recipeId
            element={
              <DashboardPage
                onSubmit={addNewRecipe}
                onUpdate={updateRecipe} 
                recipesList={currentRecipeList} />}
          />
          <Route path='/recipe/:recipeId' element={<RecipeDetailsPage recipesList={currentRecipeList} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </>
  )

}